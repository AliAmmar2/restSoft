import { useEffect } from "react";
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import RestData from "./menuItems";
import { FaUtensils, FaEdit, FaSyncAlt } from 'react-icons/fa';
import {HomeContainer,HeroSection,HeroContent,FeaturesSection,Feature,PortfolioSection,HowItWorksSection,Steps,Step,
  PortfolioGallery,TestimonialsSection,Testimonial,
} from'./home.styles'

const Home = () => {

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try{
    //             await addCollectionAndDocuments('restaurants', RestData);
    //             console.log('menus added');
    //         }catch(error){
    //             console.log(error);
    //         }
    //     };
    //     fetchUser();
    //   });
   
       
        return (
          <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Professional Menus Customized for Your Restaurant</h1>
          <p>We design your menu, and you have full control to update it anytime.</p>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <Feature>
          <FaUtensils size={50} />
          <h3>Custom Menu Creation</h3>
          <p>We create a unique, tailored menu that fits your brand and cuisine.</p>
        </Feature>
        <Feature>
          <FaEdit size={50} />
          <h3>Easy Edits Anytime</h3>
          <p>Update your menu items, prices, and descriptions whenever you need.</p>
        </Feature>
        <Feature>
          <FaSyncAlt size={50} />
          <h3>Real-Time Updates</h3>
          <p>Your changes are instantly reflected on your online menu.</p>
        </Feature>
      </FeaturesSection>

      <HowItWorksSection>
        <h2>How It Works</h2>
        <Steps>
          <Step>
            <h4>1. Request Your Menu</h4>
            <p>Contact us to start creating your customized menu.</p>
          </Step>
          <Step>
            <h4>2. We Design It for You</h4>
            <p>Our team creates a professional menu based on your needs.</p>
          </Step>
          <Step>
            <h4>3. Edit Anytime</h4>
            <p>Make updates to your menu whenever you need to keep it current.</p>
          </Step>
        </Steps>
      </HowItWorksSection>

      <TestimonialsSection>
        <h2>What Our Clients Say</h2>
        <Testimonial>
          <p>"The menu design was exactly what we needed. It's so easy to make changes!"</p>
          <h4>— Restaurant Owner</h4>
        </Testimonial>
        <Testimonial>
          <p>"Our menu updates instantly, making it perfect for our seasonal specials."</p>
          <h4>— Cafe Manager</h4>
        </Testimonial>
      </TestimonialsSection>

      <PortfolioSection>
        <h2>Example Menus</h2>
        <PortfolioGallery>
          <img src="https://via.placeholder.com/300x200" alt="Example Menu 1" />
          <img src="https://via.placeholder.com/300x200" alt="Example Menu 2" />
          <img src="https://via.placeholder.com/300x200" alt="Example Menu 3" />
        </PortfolioGallery>
      </PortfolioSection>
    </HomeContainer>
      );
}

export default Home;