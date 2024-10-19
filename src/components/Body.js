import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';

export default function Body() {
  return (
    <div>
      <div class='esquerda'>
        <Stories />
        <Posts />
      </div>
      <div class='sidebar'>
        <SideBar />
      </div>
    </div>    
  )
}