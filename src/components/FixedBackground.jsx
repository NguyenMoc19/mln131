import React, { useEffect, useMemo, useState } from 'react'

const DEFAULT_BACKGROUNDS = [
  'https://imgcdn.tapchicongthuong.vn/tcct-media/23/9/23/cam_650e6ea3a4dfa.jpg',
  'https://a.tcnn.vn/Images/images/tong-bi-thu-nguyen-phu-trong-phai-neu-cao-hon-nua-tinh-than-trach-nhiem-quyet-liet-dau-tranh-phong-chong-tham-nhung-tieu-cuc-20230619142728.jpg?fbclid=IwY2xjawNzEq1leHRuA2FlbQIxMABicmlkETFxTW9IZmlIMEJDUDIxckxRAR7uHdK8JCKsm0YEwdGfODEZjmkB3DebADKE_hTm3k_i7moKJNOyOYJt_3MrTA_aem_iN2b96ZWq37iNhkfdIx0BQ',
]

export default function FixedBackground({ imageUrl, imageUrls = [] }) {
  const backgrounds = useMemo(() => {
    if (Array.isArray(imageUrls) && imageUrls.length > 0) {
      return imageUrls
    }
    if (imageUrl) {
      return [imageUrl]
    }
    return DEFAULT_BACKGROUNDS
  }, [imageUrl, imageUrls])

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [backgrounds.length])

  useEffect(() => {
    const rawSections = document.querySelectorAll('[data-fixed-bg-index]')
    if (!rawSections.length) return

    const panels = Array.from(rawSections)
      .map((section) => {
        const attr = section.getAttribute('data-fixed-bg-index')
        const parsedIndex = Number.parseInt(attr ?? '', 10)
        if (Number.isNaN(parsedIndex)) return null
        return { section, index: Math.max(0, Math.min(backgrounds.length - 1, parsedIndex)) }
      })
      .filter((entry) => entry !== null)

    if (!panels.length) return

    let frameId = 0

    const resolveActiveIndex = () => {
      frameId = 0
      const viewportHeight = window.innerHeight || 0
      const viewportMid = viewportHeight / 2

      let bestIndex = panels[0]?.index ?? 0
      let bestDistance = Number.POSITIVE_INFINITY
      let hasVisible = false

      panels.forEach(({ section, index }) => {
        const rect = section.getBoundingClientRect()
        if (rect.bottom <= 0 || rect.top >= viewportHeight) return
        hasVisible = true
        const sectionMid = rect.top + rect.height / 2
        const distance = Math.abs(sectionMid - viewportMid)
        if (distance < bestDistance) {
          bestDistance = distance
          bestIndex = index
        }
      })

      if (!hasVisible) {
        let closestAboveDistance = Number.POSITIVE_INFINITY
        panels.forEach(({ section, index }) => {
          const rect = section.getBoundingClientRect()
          const distance = rect.top < 0 ? Math.abs(rect.top) : rect.top
          if (distance < closestAboveDistance) {
            closestAboveDistance = distance
            bestIndex = index
          }
        })
      }

      setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex))
    }

    const requestUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(resolveActiveIndex)
    }

    resolveActiveIndex()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [backgrounds.length])

  return (
    <>
      {backgrounds.map((url, index) => (
        <div
          key={typeof url === 'string' ? `${index}-${url}` : index}
          className={`fixed-background fixed-background-layer${activeIndex === index ? ' is-active' : ''}`}
          style={{ backgroundImage: `url(${url})` }}
          aria-hidden="true"
        />
      ))}
    </>
  )
}
