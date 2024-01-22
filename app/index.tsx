import React, { FC } from 'react';

interface NewComponentProps {}

const NewComponent: FC<NewComponentProps> = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="globals.css" />
      <link rel="stylesheet" href="styleguide.css" />
      <link rel="stylesheet" href="style.css" />
      <div className="option">
        <div className="div">
          <div className="overlap">
            <div className="FA-qs">
              <div className="overlap-group">
                <img className="istock" src="img/istock-1463401580-2.png" />
                <div className="rectangle" />
                <div className="defi-users-wrapper">
                  <div className="defi-users">
                    <div className="heading-overline">
                      <div className="frame">
                        <div className="overline">FAQS</div>
                        <div className="heading">Questions? Look here.</div>
                      </div>
                      <div className="tertiary-nav-wrapper">
                        <div className="tertiary-nav">
                          <div className="tertiary-nav-2">
                            <div className="program-balance">DeFi Users</div>
                            <div className="text-wrapper">$MBRN Holders</div>
                            <div className="text-wrapper">DeFi Builders</div>
                          </div>
                          <div className="nav-line">
                            <div className="overlap-group-2">
                              <img className="line" src="img/line-124.svg" />
                              <div className="rectangle-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="question">
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">
                            Currently the frontend supports the collateral types $OSMO, $ATOM, and $USDC—can a user add
                            additional collateral types?&nbsp; How?
                          </p>
                          <img className="expand-more" src="img/expand-more.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          Only $MBRN governance can add new collateral types.&nbsp;&nbsp;<br /><br />In the future we anticipate
                          Membrane will become an important sink for $BTC, $ETH, and $TIA collateral once they are
                          whitelisted by community gov.
                        </p>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">Is there a limit to the number of collateral types I can add to the bundle?</p>
                          <img className="expand-more" src="img/expand-more-1.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          No, as long as they are accepted within the protocol, they can be used in the bundle.
                        </p>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">How are vault parameters calculated when using a multi-asset bundle?</p>
                          <img className="expand-more" src="img/expand-more-2.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          Parameters are taken from collateral assets individually and then used proportionally to
                          calculate a vault’s parameters. Ex: If you have 2 assets at 50%, one with a 50% max LTV &amp;
                          one with a 60% max LTV, your vault’s max LTV will be 55%.
                        </p>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">How do supply/debt caps affect my position?</p>
                          <img className="expand-more" src="img/expand-more-3.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          Caps are used to calculate interest rates, if the cap is broken the rates will increase
                          multiplicatively. Withdrawals aren’t blocked by supply cap increases &amp; deposits won’t in a
                          future protocol upgrade.
                        </p>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">
                            If collateral value drops, how do liquidations of collateral within the bundle work to ensure
                            regeneration of peg?
                          </p>
                          <img className="expand-more" src="img/expand-more-4.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          Collateral within bundles is liquidated at its proportion of the bundle, eg, 10% USDC 90% $OSMO
                          bundle will use 90% $OSMO &amp; 10% $USDC liquidations to recapitalize.&nbsp;&nbsp;<br /><br />If the
                          value of just one collateral type cascades, the unaffected collateral type plays an increasing
                          role in each subsequent liquidation.
                        </p>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">Do the liquidation pools have lockup periods?</p>
                          <img className="expand-more" src="img/expand-more-5.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          The single asset pools don’t, the omni-asset pool has a 1 day unstaking period.
                        </p>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">Do I need to activate my bids?</p>
                          <img className="expand-more" src="img/expand-more-6.svg" />
                        </div>
                        <div className="text-wrapper-2">No</div>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">What is the flow of liquidated assets since there are 2 different pool types?</p>
                          <img className="expand-more" src="img/expand-more-7.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          The single asset pools get first dibs on all assets, the omni-asset pool gets the leftovers.
                        </p>
                      </div>
                      <div className="point">
                        <div className="frame-2">
                          <p className="p">Are both pools first in first out (FIFO)?</p>
                          <img className="expand-more" src="img/expand-more-8.svg" />
                        </div>
                        <p className="text-wrapper-2">
                          Only the omni-asset pool is FIFO, so being first is valuable. The single asset pools are
                          pro-rata so the liquidated assets are distributed based on your share of the pool.
                        </p>
                      </div>
                      <div className="point-2">
                        <div className="frame-2">
                          <p className="p">Does every collateral asset have a single asset pool?</p>
                          <img className="expand-more" src="img/expand-more-9.svg" />
                        </div>
                        <div className="text-wrapper-2">Yes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="overlap-2">
                  <div className="ellipse" />
                  <div className="footer-2">
                    <div className="block">
                      <div className="frame-3">
                        <img className="logo-block" src="img/logo-block.svg" />
                        <p className="text-wrapper-3">© 2024 Membrane. All rights reserved.</p>
                      </div>
                    </div>
                    <div className="frame-4">
                      <div className="frame-5">
                        <div className="link"><div className="label">Vision</div></div>
                        <div className="link"><div className="label">dApp Walk-thru</div></div>
                        <div className="link"><div className="label">Protocol Advantages</div></div>
                        <div className="link"><div className="label">Opportunity</div></div>
                        <div className="link"><div className="label">FAQs</div></div>
                      </div>
                      <div className="frame-6">
                        <img className="media-social-icon" src="img/media-social-icon-1.svg" />
                        <img className="media-social-icon" src="img/media-social-icon-2.svg" />
                        <img className="media-social-icon" src="img/media-social-icon-3.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opportunity" />
            </div>
            <div className="overlap-3">
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <div className="advantages">
                <div className="overlap-4">
                  <div className="bar-graph">
                    <div className="group">
                      <div className="heading-2">Decentralization x Stability Stablecoins</div>
                      <div className="frame-7">
                        <div className="heading-3">$CDT</div>
                        <div className="heading-3">$LUSD</div>
                        <div className="heading-3">$HAI</div>
                        <div className="heading-3">$RAI</div>
                      </div>
                      <div className="overlap-group-3">
                        <div className="heading-4">Potential for Growth</div>
                        <img className="lines" src="img/lines.png" />
                        <div className="bars">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-5" />
                          <div className="rectangle-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="advantages" src="img/advantages-1.png" />
                </div>
              </div>
            </div>
            <div className="features">
              <div className="overlap-5">
                <div className="ellipse-4" />
                <div className="ellipse-5" />
                <div className="ellipse-6" />
                <div className="ellipse-7" />
                <div className="container">
                  <div className="heading-overline-2">
                    <p className="overline-2">
                      <span className="span">d</span> <span className="text-wrapper-4">App Walkthrough</span>
                    </p>
                    <div className="section-heading">Navigate the Future.</div>
                    <p className="supporting-text">A Guide to Membrane’s Core Features</p>
                  </div>
                  <div className="content">
                    <div className="frame-8">
                      <div className="row">
                        <div className="feature">
                          <div className="text">
                            <div className="supporting-text-2"></div>
                            <div className="heading-5">Bundle Collateral</div>
                          </div>
                        </div>
                        <div className="feature">
                          <div className="text">
                            <div className="supporting-text-2"></div>
                            <div className="heading-5">Mint<br />$CDT</div>
                          </div>
                        </div>
                        <div className="feature">
                          <div className="text">
                            <div className="supporting-text-2"></div>
                            <div className="heading-5">Stake $MBRN</div>
                          </div>
                        </div>
                        <div className="feature">
                          <div className="text">
                            <div className="supporting-text-2"></div>
                            <div className="heading-5">Vote in Governance</div>
                          </div>
                        </div>
                        <div className="feature">
                          <div className="text">
                            <div className="supporting-text-2"></div>
                            <div className="heading-5">Bid for Liquidations</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="the-vision">
              <div className="overlap-6">
                <img className="montytree" src="img/montytree-2.png" /> <img className="img" src="img/the-vision.png" />
              </div>
            </div>
            <div className="overlap-7">
              <div className="CDT">
                <div className="overlap-8">
                  <div className="ellipse-8">
                    <div className="ellipse-9" />
                    <div className="ellipse-10" />
                  </div>
                  <div className="container-wrapper">
                    <div className="container-2">
                      <div className="heading-overline-3">
                        <img className="CDT-icon" src="img/cdt-icon-1.svg" />
                        <div className="overline-3">DEFI RESERVE</div>
                        <div className="section-heading">CDT: Collateralized Debt Token.</div>
                        <p className="supporting-text">Optimized for DeFi and DEX users within the Interchain.</p>
                      </div>
                      <div className="content">
                        <div className="feature-2">
                          <div className="text">
                            <div className="supporting-text-3">ONE</div>
                            <div className="heading-6">Asset-backed stablecoin.</div>
                          </div>
                        </div>
                        <div className="frame-8">
                          <div className="row">
                            <div className="feature">
                              <div className="text">
                                <div className="supporting-text-3">TWO</div>
                                <p className="heading-7">
                                  Flexible minting framework that uses ‘bundles’ of collateral assets.
                                </p>
                              </div>
                            </div>
                            <div className="feature">
                              <div className="text">
                                <div className="supporting-text-3">THREE</div>
                                <p className="heading-7">Antifragile, self-healing, and decentralized design.</p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="feature-3">
                              <div className="text">
                                <div className="supporting-text-3">FOUR</div>
                                <p className="heading-7">
                                  The protocol’s liquidation engine ensures stability &amp; collateral preservation.
                                </p>
                              </div>
                            </div>
                            <div className="feature">
                              <div className="text">
                                <div className="supporting-text-3">FIVE</div>
                                <p className="heading-7">$MBRN for voting within the decentralized community.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="heading-overline-3">
                        <p className="supporting-text-4">
                          <span className="text-wrapper-5">DEX’s where you can Trade $MBRN and $CDT:&nbsp; </span>
                          <span className="text-wrapper-6">Osmosis</span>
                        </p>
                        <p className="supporting-text-5">
                          <span className="text-wrapper-5">Project GitHub:&nbsp; </span>
                          <a href="https://github.com/MembraneFinance" target="_blank" rel="noopener noreferrer"><span className="text-wrapper-7">https://github.com/MembraneFinance<br /></span></a>
                          <span className="text-wrapper-5">Project X Account:&nbsp; </span>
                          <a href="https://twitter.com/insaneinthembrn" target="_blank" rel="noopener noreferrer"><span className="text-wrapper-7">https://twitter.com/insaneinthembrn</span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-9">
                  <div className="hero">
                    <div className="overlap-group-4">
                      <img className="istock-2" src="img/istock-1463401580-2-1.png" />
                      <div className="rectangle-7" />
                    </div>
                  </div>
                  <div className="text-2">
                    <div className="heading-overline-4">
                      <div className="overline-4">INTRODUCING</div>
                      <div className="heading-8">The Membrane.</div>
                    </div>
                    <div className="frame-9">
                      <div className="ellipse-wrapper"><div className="ellipse-11" /></div>
                      <p className="supporting-text-6">
                        It's foundational protocol, a stablecoin called $CDT, is designed to serve the needs of the
                        Interchain community.
                      </p>
                    </div>
                    <div className="frame-10">
                      <div className="ellipse-11" />
                      <div className="supporting-text-7">Dynamically homeostatic. Resilient. Decentralized.</div>
                    </div>
                    <div className="frame-9">
                      <div className="ellipse-wrapper"><div className="ellipse-11" /></div>
                      <p className="supporting-text-6">Symbiotic with connected digital economies.</p>
                    </div>
                  </div>
                </div>
              </div>
              <header className="header">
                <div className="content-wrapper">
                  <div className="content-2">
                    <img className="logo-block" src="img/logo-block-1.svg" />
                    <div className="links-actions">
                      <div className="links">
                        <div className="link"><div className="label">DeFi Reserve</div></div>
                        <div className="link"><div className="label">The Vision</div></div>
                        <div className="link"><div className="label">dApp Walk-thru</div></div>
                        <div className="link"><div className="label">Protocol Advantages</div></div>
                        <div className="link"><div className="label">Opportunity</div></div>
                        <div className="link"><div className="label">FAQs</div></div>
                      </div>
                      <div className="actions"><img className="button" src="img/button.svg" /></div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;