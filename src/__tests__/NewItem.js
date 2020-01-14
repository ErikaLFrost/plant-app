import React from "react";
import { mount } from "enzyme";
import { TodoProvider} from "../contexts/TodoContext";
import NewItem from "../components/NewItem";

describe("Test NewItem component", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = mount(
      <TodoProvider dispatch={jest.fn()}>
        <NewItem />
      </TodoProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it("should render NewItem component", () => {
    expect(wrapper.find(".ItemInput").exists()).toBeTruthy();
  });

  xit("should call setState onClick", () => {
    wrapper.find("input[type='text']").simulate("change", "Tvätta");
    wrapper.find("button").simulate("click");
    expect(setState).toHaveBeenCalled();
  });
});
