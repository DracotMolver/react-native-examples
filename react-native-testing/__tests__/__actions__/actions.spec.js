import reducers from "./actions/index"; // General action root
import reducer, { actions } from './actions/entities/';

describe("ACTIONS", () => {
  it("Actions: main actions load reducers and actions", () => {
    expect(reducers).toBeTruthy();
  });

  // This describe must be on each individual file
  describe("[action_name]", () => {
    // Testing initial state
    it("Should the reducer returns the initialState", () => {
      expect(reducer(initState, {})).toBeEqual(initialState);
    });

    // This action test is for the one you use for calling or even for the one
    // you use for success/error
    it('Actions: Should call fetch[action_name] action', () => {
      expect(reducer(initState, actions.fetchSomeEndpoint)).toBeEqual(payload);
    });
  });

  // Clear the whole state
  it("Actions: Should call CLEAR_STATE action", () => {
    expect(reducers({}, { type: "CLEAR_STATE" })).toBeEqual(initialState);
  });
});
