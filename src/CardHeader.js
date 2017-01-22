import React, {Component} from 'react';
// import ColorThief from 'color-thief-jimp';
import Grade from 'grade-js';

export default class CardHeader extends Component {

  // fetchLogo(link) {
  //   fetch('http://logo.clearbit.com/' + link).then(function(response) {
  //     console.log(response);
  //     return response.body;
  //   }).catch(function(err) {
  //   });
  // }
//   componentDidMount() {
//     // const imgElement= Grade(document.querySelectorAll('.blah'));
//     const imgElement = Grade(document.querySelectorAll('.blah'), null, function(gradientData){
//     return gradientData;
// })
//     console.log(imgElement);
//   }

  render() {
    const { imageLink, category } = this.props;
    var style = { 
      // backgroundColor: Grade(this.imgElement)
        backgroundImage: 'url(//logo.clearbit.com/' + imageLink + ')'
        // backgroundColor: ColorThief.getColor(this.fetchLogo(imageLink))
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    );
  }
}