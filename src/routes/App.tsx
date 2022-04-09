import Carousel from '../components/Carousel';
import './App.scss';


export default function App() {
  const data = [
    {
      title: 'Oh. So. Pro.',
      desc: 'From $41.62/mo. for 24 mo. or $999 before trade‑in1',
      imgUrl: 'https://www.apple.com/v/iphone/home/bf/images/overview/compare/compare_iphone_12__dz3sv9lzdzu6_medium_2x.jpg'
    },
    {
      title: 'Mac Studio',
      desc: 'Empower station.',
      imgUrl: 'https://www.apple.com/v/mac/home/bm/images/overview/hero/mac_studio__c2wojtx43pw2_medium_2x.jpg'
    },
    {
      title: 'Studio Display',
      desc: 'A sight to be bold.',
      imgUrl: 'https://www.apple.com/v/mac/home/bm/images/overview/hero/studio_display__cn9qj5umkwya_medium_2x.jpg'
    },
  ]

  return (
    <div className="App">
      <Carousel data={data} duration={3000} />
    </div>
  );
}
