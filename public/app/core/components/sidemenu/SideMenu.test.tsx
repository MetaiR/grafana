import React from 'react';
import { shallow } from 'enzyme';
import { SideMenu } from './SideMenu';

jest.mock('context_srv', () => ({
  sidemenu: true,
}));

const setup = (propOverrides?: object) => {
  const props = Object.assign(
    {
      loginUrl: '',
      user: {},
      mainLinks: [],
      bottomeLinks: [],
      isSignedIn: false,
    },
    propOverrides
  );

  return shallow(<SideMenu {...props} />);
};

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});