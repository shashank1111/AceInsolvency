import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = theme => {
  return {
    bannerImg: {
      zIndex: '2',
      width: '100%',
      height: '700px',
    },
  };
};

class HeroBanner extends PureComponent {
  render() {
    const { classes } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <div>
        <Slider {...settings}>
          <div style={{ position: 'relative' }}>
            <div>
              <div style={{ position: 'absolute', color: '#fff' }}>
                {/* <h2>hthasduasjnadsjkadnsadjksn</h2> */}
              </div>
              <img
                alt="heroBanner1"
                className={classes.bannerImg}
                src="images/banner-1.jpg"
              />
            </div>
          </div>
          <div>
            <img
              alt="heroBanner2"
              className={classes.bannerImg}
              src="images/banner-2.jpg"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
HeroBanner.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.any,
};

export default withStyles(styles)(HeroBanner);
