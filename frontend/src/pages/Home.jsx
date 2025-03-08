import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://thumbs.dreamstime.com/b/stunning-hyper-realistic-image-authentic-kokani-maharashtrian-cuisine-india-generated-ai-355169187.jpg"
                className="d-block w-100"
                alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="corrozel3.jpg"
                className="d-block w-100"
                alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="download.jpg"
                className="d-block w-100"
                alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card1 ">
        <div className="row">
          {/* Row 1 */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img src="paneer.jpg" className="card-img-top" alt="Paneer Butter Masala" />
              <div className="card-body">
                <h5 className="card-title">Paneer Butter Masala</h5>
                <p className="card-text">Rich and creamy paneer dish.</p>
                <h6>Ingredients:</h6>
                <ul>
                  <li>200g paneer (cubed)</li>
                  <li>2 tbsp oil or butter</li>
                  <li>2 onions (finely chopped)</li>
                  <li>2 tomatoes (pureed)</li>
                  <li>½ cup fresh cream</li>
                </ul>
                <h6>Instructions:</h6>
                <ol>
                  <li>Sauté onions, add tomatoes and cook until soft.</li>
                  <li>Add spices and cashew paste, then cook.</li>
                  <li>Add paneer cubes, fresh cream, and mix well.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="card h-100">
              <img src="chikken.jpg" className="card-img-top" alt="Chicken Curry" />
              <div className="card-body">
                <h5 className="card-title">Chicken Curry</h5>
                <p className="card-text">Spicy and flavorful chicken curry.</p>
                <h6>Ingredients:</h6>
                <ul>
                  <li>500g chicken (cut into pieces)</li>
                  <li>2 onions, 2 tomatoes (pureed)</li>
                  <li>1 tbsp ginger-garlic paste</li>
                  <li>1 tsp turmeric, chili, and garam masala</li>
                </ul>
                <h6>Instructions:</h6>
                <ol>
                  <li>Sauté onions, add tomato puree and spices.</li>
                  <li>Add chicken, cover, and cook for 25 minutes.</li>
                  <li>Garnish with coriander and serve.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
          <div className="card 3">
            
              <img src="salad.jpg" className="card-img-top" alt="Healthy Salads" />
              <div className="card-body">
                <h5 className="card-title">Healthy Salad</h5>
                <p className="card-text">A fresh and nutritious salad.</p>
                <h6>Ingredients:</h6>
                <ul>
                  <li>1 cup lettuce, cucumber, and tomatoes</li>
                  <li>½ cup bell peppers and carrots</li>
                  <li>¼ cup olives, feta cheese</li>
                  <li>2 tbsp olive oil, 1 tbsp lemon juice</li>
                </ul>
                <h6>Instructions:</h6>
                <ol>
                  <li>Chop all vegetables and mix in a bowl.</li>
                  <li>Add dressing and toss well.</li>
                  <li>Serve fresh.</li>
                </ol>
          </div>

          <div className="card 4">
              <img src="basundi.jpg" className="card-img-top" alt="Basundi" />
              <div className="card-body">
                <h5 className="card-title">Basundi</h5>
                <p className="card-text">A creamy Indian dessert.</p>
                <h6>Ingredients:</h6>
                <ul>
                  <li>1 liter full cream milk</li>
                  <li>½ cup sugar, ¼ tsp cardamom</li>
                  <li>10 almonds, 10 cashews, 10 pistachios</li>
                  <li>1 tbsp saffron milk</li>
                </ul>
                <h6>Instructions:</h6>
                <ol>
                  <li>Boil and reduce milk to half.</li>
                  <li>Add sugar, cardamom, saffron, and nuts.</li>
                  <li>Serve warm or chilled.</li>
                </ol>
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
