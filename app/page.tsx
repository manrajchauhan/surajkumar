import Hero from "./components/Hero/Hero";
import Services from "./components/OurService/Services";
import LatestPosts from "./components/Blogs/Blogs";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <LatestPosts/>
    </div>
  );
}
