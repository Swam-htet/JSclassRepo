// import css
import "./PageComponent.css";

// profile
// image property
function Profile({ image }) {
  return (
    <div>
      <img className="profile-picture" alt={"This is alt"} src={image} />
    </div>
  );
}

// header

// distructre the property object to profile
function Header({ profile }) {
  return (
    <div>
      {/* Profile component with image property/ value profile.image */}
      <Profile image={profile.image} />
    </div>
  );
}

function Body(props) {
  return (
    <div>
      <h1>Body</h1>
    </div>
  );
}

function Footer(props) {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

// page component
export default function PageComponent() {
  let profile = {
    name: "Katherine Johnson",
    image: "https://i.imgur.com/MK3eW3As.jpg",
  };
  return (
    <div>
      {/* profile as property, value is property object */}
      <Header profile={profile} />
      <Body />
      <Footer />
    </div>
  );
}
