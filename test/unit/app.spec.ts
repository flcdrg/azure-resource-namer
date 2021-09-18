import {bootstrap} from 'aurelia-bootstrapper';
import {ComponentTester, StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';

describe('Stage App Component', () => {
  let component: ComponentTester<any>;

  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('app'))
      .inView('<app></app>');
  });

  afterEach(() => component.dispose());

  it('should render output', done => {
    component.create(bootstrap).then(() => {
      const view = component.element;
      expect(view.outerHTML).toMatchSnapshot();
      done();
    }).catch((e: any) => {
      fail(e);
      done();
    });
  });
});
