import styled from 'styled-components';

export const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
`;

export const HeroSection = styled.section`
  background: url('https://via.placeholder.com/1200x400') no-repeat center center/cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const HeroContent = styled.div`
  h1 {
    font-size: 48px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background-color: #ff6600;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

export const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Feature = styled.div`
  text-align: center;
  max-width: 250px;

  h3 {
    margin-top: 15px;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const HowItWorksSection = styled.section`
  padding: 50px 20px;
  text-align: center;

  h2 {
    margin-bottom: 30px;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Step = styled.div`
  max-width: 250px;
  margin-bottom: 30px;

  h4 {
    margin-bottom: 10px;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 16px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const TestimonialsSection = styled.section`
  background-color: #ff6600;
  color: white;
  padding: 50px 20px;
  text-align: center;
  border-radius:5px;

  h2 {
    margin-bottom: 30px;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const Testimonial = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.5;
  

  h4 {
    margin-top: 10px;
    font-size: 16px;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const PortfolioSection = styled.section`
  padding: 50px 20px;
  text-align: center;

  h2 {
    margin-bottom: 30px;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const PortfolioGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;
