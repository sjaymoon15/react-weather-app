import moxios from "moxios"

import * as actions from "./index"
import * as types from "./types"
import { mockStore } from "../utils/testUtils"
import { weatherResponseMock, searchQueryMock } from "../utils/testMocks"
import { defaultState } from "../reducers/weathers"
import { FETCH_WEATHERS_ERROR_MESSAGE } from "../utils/constants"

import * as index from "./index"
describe('action creators', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('fetchWeathers', () => {
    let store;
    beforeEach(() => {
      store = mockStore(defaultState);
    });

    describe('when the http request is successful', () => {
      it('dispatches correct actions', () => {
        const expectedActions = [
          {
            type: types.FETCH_WEATHERS,
            payload: weatherResponseMock,
          },
        ];

        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: weatherResponseMock,
          });
        });

        return store
          .dispatch(actions.fetchWeathers(searchQueryMock))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
      });
    });

    describe('when the http request responds with a client side error', () => {
      it('dispatches correct actions', () => {
        const expectedActions = [
          {
            type: types.FETCH_WEATHERS_ERROR,
            payload: FETCH_WEATHERS_ERROR_MESSAGE,
          },
        ];

        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 400,
          });
        });

        return store
          .dispatch(actions.fetchWeathers(searchQueryMock))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
      });
    });

    describe('when the http request responds with a server side error', () => {
      it('dispatches correct actions', () => {
        const expectedActions = [
          {
            type: types.FETCH_WEATHERS_ERROR,
            payload: FETCH_WEATHERS_ERROR_MESSAGE,
          },
        ];

        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 500,
          });
        });

        return store
          .dispatch(actions.fetchWeathers(searchQueryMock))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
      });
    });
  });
});

// @ponicode
describe("index.fetchWeathers", () => {
    test("0", () => {
        let callFunction = () => {
            index.fetchWeathers("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.fetchWeathers("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.fetchWeathers("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.fetchWeathers("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.fetchWeathers("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.fetchWeathers(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
