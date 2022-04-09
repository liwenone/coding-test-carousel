import Carousel from '../components/Carousel';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import './App.scss';


export default function App() {
  const data = [
    {
      title: 'Oh. So. Pro.',
      desc: 'From $41.62/mo. for 24 mo. or $999 before trade‑in1',
      imgUrl: img1
    },
    {
      title: 'Mac Studio',
      desc: 'Empower station.',
      imgUrl: img2
    },
    {
      title: 'Studio Display',
      desc: 'A sight to be bold.',
      imgUrl: img3
    },
  ]

  return (
    <div className="App">
      <Carousel data={data} duration={3000} />
    </div>
  );
}
