import React from 'react';
import {shallow } from 'enzyme';
import ExampleWork , {ExampleWorkBubble} from '../js/example-work';

const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  },

  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
];
describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>)

  it("Should be a section element", () => {
    expect(component.type()).toEqual('section');
  });

  it("should contain as many childres as there are in work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);

  let images = component.find("img");

  it("Should contain single 'img' element", () => {
    expect(images.length).toEqual(1);
  });


});
