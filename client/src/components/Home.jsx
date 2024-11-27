import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  const contributors = [
    {
      name: "Manoranjan",
      image:
        "https://imgs.search.brave.com/1zP5Yzr2s1aNZ-n7yqfEfshCuJxEq0NbwWPl45IrMjs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/ODQ5MDIyL3Bob3Rv/L2hhbmRzb21lLWlu/ZGlhbi1tYW4ud2Vi/cD9iPTEmcz0xNzA2/NjdhJnc9MCZrPTIw/JmM9SzNBdk5JSnha/cFVzYU9aZ0lFVlpI/XzlmTkl4RERESkVw/b3htVmhaVHhBUT0",
      description: "donated 500 clothes",
    },
    {
      name: "Mohan",
      image:
        "https://imgs.search.brave.com/j2J8bZZ-q1I4INbTGInmBm_pljaq1ak-HVPj4RQiQrc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzM0LzE0Lzcy/LzM2MF9GXzczNDE0/NzIxNV82OWl1UWNZ/QTRINER3SGFDS3dr/ZVlDYXNkN25nNkRo/WS5qcGc",
      description: "fed 100 people",
    },
    {
      name: "Ramesh",
      image:
        "https://imgs.search.brave.com/8txnxN9psNHQ93jztajrQUCrjh1feWCCSpZIZ4LuxJY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQwLzA3LzAz/LzM2MF9GXzY0MDA3/MDM4M185TEozZVRS/U3ZPaXdLeXJtQlln/Y2poU2xja0RuTmN4/bC5qcGc",
      description: "donated 100 clothes",
    },
    {
      name: "Rajeev",
      image:
        "https://imgs.search.brave.com/yZJ2eqGNa7qwYtABEHH6KBAzfEfox3AIB7BLOfKqqQg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQxLzU3LzI0/LzM2MF9GXzM0MTU3/MjQzMV9EUEVibU9K/emtjR1JhR21jRUs1/dEp2c2dRRXQ5TTBU/UC5qcGc",
      description: "donated 250 clothes",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-27.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-29.jpeg",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-27.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-26.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-24.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-21.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-20.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-13.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-12.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-10.jpg?w=1024",
    "https://aspireandglee.com/wp-content/uploads/2021/07/nityaberia-28.jpeg",
    "https://aspireandglee.com/wp-content/uploads/2021/07/namkhana-18.jpeg",
    "https://aspireandglee.com/wp-content/uploads/2021/07/namkhana-8.jpg?w=1024",
  ];

  return (
    <div className="home">
      {/* About Section */}
      <section id="about" className="about">
        <img
          src="https://aspireandglee.com/wp-content/uploads/2020/04/cropped-img-20200417-wa0062_edited.png"
          alt="A&G"
          className="logo-img"
        />
        <h1>Welcome to </h1>
        <h1>Aspire and Glee</h1>
        <div className="buttons">
          <RouterLink to="/dash">
              <button className="btn-primary mainbtn">Spread a Smile!!</button>
          </RouterLink>
        </div>
      </section>
      

      <div className="slideshow">
        <div className="image-scroll-slideshow">
          <div className="scrolling-row">
            {images.concat(images).map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div id="our-story" className="about-2">
        <div className="about-2">
          <h3>Our Story</h3>
          <p>
            What began as a humble desire to make a difference has blossomed
            into a powerful force for change. Inspired by the heartfelt prayers
            of patients at Saroj Mohan Cancer Hospital and their joy from simple
            acts of kindness, we united with a common purpose: "Let’s intend to
            spread smiles." Aspire and Glee, registered under the West Bengal
            Registration Act, 1961 (Registration No: 3/2D/24337 of 2014-15), was
            founded seven years ago with a mission to create positive impact.
            Over these years, we’ve organized 35+ events, reaching out to those
            in need:
          </p>
          <ul>
            <li> Feeding the Hungry</li>
            <li> Supporting Orphanages</li>
            <li> Providing Drinking Water to Old Age Homes</li>
            <li> Offering Free Medical Checkups and Medicines</li>
            <li> Sponsoring Education</li>
            <li> Reconstructing Homes Affected by Floods</li>
            <li> Supporting Cancer Treatment and Critical Surgeries</li>
          </ul>
        </div>
      </div>

      <div className="about-2">
        <h3>Our Events for This Year</h3>
        <p>
          1. Ration Kits and Essential Medicines for Dhaki Dadas: o Date:
          Panchami o Details: Distributing essential ration kits and medicines
          to the Dhaki dadas who bring joy to our celebrations, ensuring they
          have the support they need. 2. Festive Pujo Lunch Sponsorship: o
          Dates: Shasthi to Dashami o Details: Sponsoring festive lunches at
          seven carefully selected locations, including:  4 Old-Age Homes  3
          Orphanages These meals will spread the joy of the festival across West
          Bengal. 3. New Clothes Donation: o Details: Providing new clothes to
          the residents of old-age homes and orphanages, adding a festive touch
          to their celebrations and making them feel special. 4. Hunger Drive
          for Street Children: o Date: Shasthi/Saptami Evening o Details:
          Launching a hunger drive with the distribution of biryani packets to
          street children, ensuring they too can enjoy the festival’s delights.
        </p>
      </div>

      {/* Other sections go here with respective IDs */}

      {/* Buttons Section */}
      {/* <section className="buttons">
        <RouterLink to="/dash">
            <button className="btn-primary mainbtn">Spread the Smile!!</button>
        </RouterLink>
        
      </section> */}

      {/* Contributors Section */}
      <section id="contributors" className="contributors">
        <h2>Our Contributors</h2>
        <Slider {...settings}>
          {contributors.map((contributor, index) => (
            <div key={index} className="contributor">
              <img src={contributor.image} alt={contributor.name} />
              <h3>{contributor.name}</h3>
              <p>{contributor.description}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Extra Section */}
      <section id="contact-us" className="extra">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact No.:</label>
            <input type="tel" id="contact" name="contact" required />
          </div>
          <div className="form-group">
            <label htmlFor="query">Query:</label>
            <textarea id="query" name="query" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Our NGO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
