import React from 'react';
import './style.css';
import Navbar from '../../common-components/Navbar';
import Footer from '../../common-components/Footer';
import Card from './components/Card';

function FormPage() {
  return (
    <div>
      <Navbar />
      <h1 className="heading">CREATE NFT</h1>
      <div className="formPageContainer">
        <div className="section">
          <div className="yellowHeading">Add MetaData</div>
          <div className="metaData">
            <div className="mainInfo">
              <div className="mainInfoLeft">
                <input type="file" className="fileInput" />
              </div>

              <div className="mainInfoRight">
                <input
                  type="text"
                  className="textInput"
                  placeholder="Add Title"
                />
                <input
                  type="text"
                  className="textInput descField"
                  placeholder="Add Description"
                />
              </div>
            </div>
            <div className="otherInfo">
              <div>
                <label for="externalLink">
                  Add External Link{' '}
                  <span className="labelTextYellow">
                    (You can add your external links like
                    twitter/opensea/website etc...)
                  </span>
                </label>
                <br></br>
                <input
                  type="text"
                  className="textInput"
                  id="externalLink"
                  placeholder="Provide URL"
                />
              </div>
              <div>
                <label for="tags">
                  Add Tags <span className="labelTextYellow">(Max: 5)</span>
                </label>
                <br></br>
                <input
                  type="text"
                  className="textInput"
                  id="tags"
                  placeholder="Add Tags"
                />
              </div>
            </div>
            <button className="btn-y">Continue</button>
          </div>
        </div>
        <div className="section">
          <div className="yellowHeading">Price</div>
          <div className="price">
            <div>
              <label for="setPrice">Set a Price</label>
              <br></br>
              <input
                type="text"
                className="textInput"
                id="setPrice"
                placeholder="Enter price for one piece"
              />
            </div>
            <div className="fees">
              <p>Influencer fee 2.5%</p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p>Service fee 2.5%</p>
            </div>
            <div className="feesExtraInfo">
              <p>
                You will receive 1378.65 ETH <span>($3511)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="yellowHeading">Add Influencer</div>
          <div className="addInfluencers">
          <h6>Add Influencers</h6>
            <div className="infList">
            <Card url="https://bit.ly/3DOgDWM"/>
            <Card url="https://bit.ly/3DOgDWM"/>
            <Card url="https://bit.ly/3DOgDWM"/>
            <Card url="https://bit.ly/3DOgDWM"/>
            </div>
          </div>
          <div className="removeInfluencers">
          <h6>Added Influencers</h6>
          <div className="infList">
            <Card url="https://bit.ly/3DOgDWM"/>
            <Card url="https://bit.ly/3DOgDWM"/>
            <Card url="https://bit.ly/3DOgDWM"/>
            <Card url="https://bit.ly/3DOgDWM"/>
            </div>
          </div>
        </div>
        <div className="buttonRow">
          <button className="btn-y createButton">Create</button>
          <button className="btn-d">Cancel</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FormPage;
