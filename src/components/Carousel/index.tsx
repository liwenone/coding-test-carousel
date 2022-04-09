import { useEffect, useRef, useState } from 'react'
import './index.scss'

export interface CarouselItem {
  title: string,
  desc: string,
  imgUrl: string,
}

export interface CarouselProps {
  data: CarouselItem[],
  duration?: number,
}

export default function Carousel(props: CarouselProps) {
  const {data, duration = 3000} = props

  if (data.length < 3) {
    throw Error('轮播页面需至少为3个')
  }

  const [current, setCurrent] = useState(0)
  const [listStyle, setListStyle] = useState<any>({})
  const [isLocked, setIsLocked] = useState(false)
  const [width, setWidth] = useState<any>(0)

  const refCarousel = useRef<any>()

  useEffect(() => {
    const onResize = () => {
      const rect = refCarousel.current.getBoundingClientRect()
      setCurrent(0)
      setWidth(rect.width)
    }
    window.addEventListener('resize', onResize)

    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [data, duration])


  useEffect(() => {
    setIsLocked(true)

    setListStyle({
      transition: `transform .5s`,
      transform: `translateX(-${current * width}px)`,
    })
  }, [current, width])

  const onChangeWithIndex = (index) => {
    if (!isLocked && index !== current) {
      setCurrent(index)
    }
  }

  const onTransitionEnd = () => {
    setIsLocked(false)
  }

  const onIndicatorAnimationEnd = () => {
    const next = (current + 1) % data.length
    setCurrent(next)
  }

  return (
    <div className='carousel' ref={refCarousel}>
      <div className='carousel__container'>

        <div
          className='carousel__list'
          style={{
            width: width * data.length,
            ...listStyle
          }}
          onTransitionEnd={onTransitionEnd}>
          {data.map((item, index) => (
            <div className='carousel__item' key={index} style={{width}}>
              <div className='carousel__item__title'>{item.title}</div>
              <div className='carousel__item__desc'>{item.desc}</div>
              <img className='carousel__item__img' src={item.imgUrl} alt="" />
            </div>
          ))}
        </div>

        <div className='carousel__indicator'>
          {data.map((item, index) => (
            <div className='carousel__indicator-item' key={index} onClick={() => onChangeWithIndex(index)}>
              <div className='carousel__indicator-item__progress'>
                <div
                  className={`carousel__indicator-item__progress__inner ${index === current ? 'active' : ''}`}
                  onAnimationEnd={onIndicatorAnimationEnd}
                  style={{animationDuration: `${duration / 1000}s`}}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}