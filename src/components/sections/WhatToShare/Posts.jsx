import Post from './Post';
import ProductImages from '../../../assets/W-T-S-1.png';
import VolunteerImage from '../../../assets/W-T-S-2.png';
import EducationalImage from '../../../assets/W-T-S-3.png';
import LandmarkImage from '../../../assets/W-T-S-4.png';
import EntertainmentImages from '../../../assets/W-T-S-5.png';
import CommunityImage from '../../../assets/W-T-S-6.png';

const Posts = () => {
  return (
    <div className="container mx-auto pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Post
          image={ProductImages}
          title="Promote Services and Products"
          body="Advertise and showcase various services and products to your audience."
        />
        <Post
          image={VolunteerImage}
          title="Amplify Social Causes and Volunteering"
          body="Raise awareness for social causes and volunteer opportunities by sharing impactful stories and initiatives from foundations."
        />
        <Post
          image={EducationalImage}
          title="Share Educational Content"
          body="Disseminate knowledge in fields such as science, medicine, business, and the economy through informative posts and discussions."
        />
        <Post
          image={LandmarkImage}
          title="Highlight Local Landmarks and Attractions"
          body="Showcase the beauty and significance of local landmarks and attractions, encouraging tourism and community pride."
        />
        <Post
          image={EntertainmentImages}
          title="Feature Entertainment Content"
          body="Promote entertainment-related content including music videos, documentaries, travel vlogs, concerts and many other intersting things."
        />
        <Post
          image={CommunityImage}
          title="Share Community Social Matters"
          body="Bring attention to critical social issues within communities, making them go viral to prompt reactions and actions from authorities."
        />
      </div>
    </div>
  );
};

export default Posts;
