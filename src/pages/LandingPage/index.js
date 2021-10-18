import React from 'react';
import { Typography, Paper } from "@mui/material";
import useStyles from "../../styles/homepageDesign";
import { useMediaQuery } from "react-responsive";
import nft from "../../assets/nft.png";
import image from "../../assets/image.png";
import user from "../../assets/user.png";
import wallet from "../../assets/wallet.png";
import Navbar from "../../common-components/Navbar";
import Footer from "../../common-components/Footer";

function LandingPage() {

  const classes = useStyles();
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "spaceBetween",
      }}
    >
      <div>
        {/* <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: !isMobile ? "55px" : "40px" }}
        /> */}
        <Navbar />
        <div style={{ height: !isMobile ? "50px" : "20px" }}></div>
        <div className={classes.mainBox}>
          <div
            className={classes.mainBoxLeft}
            style={{ width: !isMobile ? "480px" : "100%" }}
          >
            <div style={{ height: !isMobile ? "50px" : "20px" }}></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: isMobile && "center",
                marginBottom: "22px",
              }}
            >
              {!isMobile && (
                <div
                  style={{
                    backgroundColor: "#FBD784",
                    height: "2px",
                    width: "80px",
                    marginRight: "10px",
                  }}
                ></div>
              )}
              <Typography
                variant="h5"
                style={{
                  color: "#FBD784",
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: isMobile && "center",
                }}
              >
                WELCOME TO LOOPGEM
              </Typography>
            </div>
            <Typography
              variant="h1"
              style={{
                fontSize: "52px",
                fontWeight: "700",
                marginBottom: "22px",
                textAlign: isMobile && "center",
              }}
            >
              Discover, Create {"\n"}and{" "}
              <Typography
                variant="p"
                style={{
                  fontSize: "52px",
                  fontWeight: "700",
                  color: "#FBD784",
                }}
              >
                Promote
              </Typography>{" "}
              NFTs
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "body"}
              fontWeight="400"
              fontSize={isMobile && "14px"}
              style={{ opacity: "70%", textAlign: isMobile && "center" }}
            >
              LoopGem is the world's first NFT marketplace that allows to you
              create, collect, sell and even promote NFTs.
            </Typography>

            <Typography
              variant="h3"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#FBD784",
                marginTop: "30px",
                textAlign: isMobile && "center",
              }}
            >
              Coming Soon...
            </Typography>
            <div style={{ height: "5px" }}></div>
            <Typography
              variant={isMobile ? "h6" : "body"}
              fontWeight="300"
              style={{
                opacity: "100%",
                fontSize: "12px",
                textAlign: isMobile && "center",
              }}
            >
              Contact{" "}
              <a
                href="mailto:support@loopgem.com"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant={isMobile ? "h6" : "body"}
                  fontWeight="600"
                  style={{
                    fontSize: "14px",
                    textAlign: isMobile && "center",
                    color: "#FBD784",
                  }}
                >
                  support@loopgem.com
                </Typography>
              </a>{" "}
              for more information.
            </Typography>
          </div>
          {!isMobile && (
            <div className={classes.mainBoxRight}>
              <img src={nft} className={classes.nft} alt="nft" />
              <div style={{ height: "10px" }}></div>
              <div style={{ position: "relative" }}>
                <img src={nft} className={classes.nftReflect} alt="nft" />
                <div className={classes.backDrop}></div>
              </div>
            </div>
          )}
        </div>
        <div style={{ height: !isMobile ? "150px" : "80px" }}></div>
        <div
          className={classes.secondBox}
          style={{ marginBottom: !isMobile ? "200px" : "50px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: !isMobile ? "start" : "center",
                marginBottom: "20px",
              }}
            >
              <div className={!isMobile && classes.row}>
                <Typography
                  variant="h5"
                  style={{
                    color: "#FBD784",
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: "5px",
                    textAlign: isMobile && "center",
                  }}
                >
                  HOW TO USE LOOPGEM
                </Typography>
                {!isMobile && <div style={{ width: "6px" }} />}
                {!isMobile && (
                  <div
                    style={{
                      backgroundColor: "#FBD784",
                      height: "2px",
                      width: "100px",
                      marginRight: "10px",
                    }}
                  ></div>
                )}
              </div>
              {isMobile && <div style={{ height: "10px" }}></div>}
              <Typography
                variant="h5"
                fontWeight="700"
                fontSize={!isMobile ? "30px" : "25px"}
                style={{
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                  lineHeight: !isMobile ? "51px" : "30px",
                  letterSpacing: !isMobile ? "12.5px" : "5.5px",
                  textAlign: isMobile && "center",
                }}
              >
                FIND YOUR TREASURE
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: !isMobile ? "row" : "column",
              justifyContent: "space-between",
              alignItems: isMobile && "center",
              marginLeft: !isMobile && "20px",
              marginRight: !isMobile && "20px",
            }}
          >
            <div>
              {!isMobile && <div style={{ height: "40px" }}></div>}
              <Paper
                className={classes.steps}
                style={{ backgroundColor: "#18140C", borderRadius: "20px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <img
                    src={wallet}
                    alt="wallet"
                    style={{ width: "100px" }}
                  ></img>
                  <div>
                    <Typography
                      fontWeight="600"
                      textAlign="center"
                      style={{
                        color: "#FBD784",
                        fontSize: "25px",
                        marginBottom: "10px",
                      }}
                    >
                      Wallet
                    </Typography>
                    <Typography
                      fontWeight="400"
                      style={{ opacity: "70%", color: "white" }}
                      textAlign="center"
                    >
                      Connect your crypto wallet with LoopGem by clicking on the
                      wallet icon at the top.
                    </Typography>
                  </div>
                </div>
              </Paper>
              {!isMobile && (
                <div style={{ position: "relative" }}>
                  <Paper
                    className={classes.stepsReflect}
                    style={{ backgroundColor: "#18140C", borderRadius: "20px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <img
                        src={wallet}
                        alt="wallet"
                        style={{ width: "100px" }}
                      ></img>
                      <div>
                        <Typography
                          fontWeight="600"
                          textAlign="center"
                          style={{
                            color: "#FBD784",
                            fontSize: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          Wallet
                        </Typography>
                        <Typography
                          fontWeight="400"
                          style={{ opacity: "70%", color: "white" }}
                          textAlign="center"
                        >
                          Connect your crypto wallet with LoopGem by clicking on
                          the wallet icon at the top.
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                  <div className={classes.backDropSteps}></div>
                </div>
              )}
            </div>
            <div>
              <Paper
                className={classes.steps}
                style={{ backgroundColor: "#18140C", borderRadius: "20px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <img
                    src={image}
                    alt="wallet"
                    style={{ width: "100px" }}
                  ></img>
                  <div>
                    <Typography
                      fontWeight="600"
                      textAlign="center"
                      style={{
                        color: "#FBD784",
                        fontSize: "25px",
                        marginBottom: "10px",
                      }}
                    >
                      Create
                    </Typography>
                    <Typography
                      fontWeight="400"
                      style={{ opacity: "70%", color: "white" }}
                      textAlign="center"
                    >
                      Upload your digital media, choose your blockchain and
                      create your first NFT.
                    </Typography>
                  </div>
                </div>
              </Paper>
              {!isMobile && (
                <div style={{ position: "relative" }}>
                  <Paper
                    className={classes.stepsReflect}
                    style={{ backgroundColor: "#18140C", borderRadius: "20px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <img
                        src={image}
                        alt="wallet"
                        style={{ width: "100px" }}
                      ></img>
                      <div>
                        <Typography
                          fontWeight="600"
                          textAlign="center"
                          style={{
                            color: "#FBD784",
                            fontSize: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          Create
                        </Typography>
                        <Typography
                          fontWeight="400"
                          style={{ opacity: "70%", color: "white" }}
                          textAlign="center"
                        >
                          Upload your digital media, choose your blockchain and
                          create your first NFT.
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                  <div className={classes.backDropSteps}></div>
                </div>
              )}
            </div>
            <div>
              {!isMobile && <div style={{ height: "40px" }}></div>}
              <Paper
                className={classes.steps}
                style={{ backgroundColor: "#18140C", borderRadius: "20px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <img
                    src={user}
                    alt="wallet"
                    style={{ height: "100px" }}
                  ></img>
                  <div>
                    <Typography
                      fontWeight="600"
                      textAlign="center"
                      style={{
                        color: "#FBD784",
                        fontSize: "25px",
                        marginBottom: "10px",
                      }}
                    >
                      Promote
                    </Typography>
                    <Typography
                      fontWeight="400"
                      style={{ opacity: "70%", color: "white" }}
                      textAlign="center"
                    >
                      Connect with the influncers through loopgem and promote
                      your NFT with them.
                    </Typography>
                  </div>
                </div>
              </Paper>
              {!isMobile && (
                <div style={{ position: "relative" }}>
                  <Paper
                    className={classes.stepsReflect}
                    style={{ backgroundColor: "#18140C", borderRadius: "20px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <img
                        src={user}
                        alt="wallet"
                        style={{ height: "100px" }}
                      ></img>
                      <div>
                        <Typography
                          fontWeight="600"
                          textAlign="center"
                          style={{
                            color: "#FBD784",
                            fontSize: "25px",
                            marginBottom: "10px",
                          }}
                        >
                          Promote
                        </Typography>
                        <Typography
                          fontWeight="400"
                          style={{ opacity: "70%", color: "white" }}
                          textAlign="center"
                        >
                          Connect with the influncers through loopgem and
                          promote your NFT with them.
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                  <div className={classes.backDropSteps}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;