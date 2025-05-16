import Spline from '@splinetool/react-spline'

interface Props {
  character: 'VIKI' | 'EVA'
}

export default function ThreeDModel({ character }: Props) {
  return (
    <Spline
      scene={
        character === 'VIKI'
          ? 'https://prod.spline.design/wgUKcyvQOhAOOu9U/scene.splinecode'
          : 'https://prod.spline.design/YqbL5voFQrQGvw2h/scene.splinecode'
      }
    />
  )
}
