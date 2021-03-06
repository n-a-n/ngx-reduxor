import * as crud from './crud.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface CrudState {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: HttpErrorResponse;
  type: string;
};

export const initialState: CrudState = {
  loading: false,
  entities: {},
  result: [],
  error: null,
  type: ''
};

export function reducer(state = initialState, action: crud.Actions): CrudState {
  switch (action.type) {
    case crud.GET_CRUD: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.GET_CRUD_SUCCESS: {
      state.result = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.GET_CRUD_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case crud.CREATE_CRUD: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.CREATE_CRUD_SUCCESS: {
      state.result = [...state.result, action.payload];
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.CREATE_CRUD_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case crud.UPDATE_CRUD: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.UPDATE_CRUD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.UPDATE_CRUD_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case crud.DELETE_CRUD: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.DELETE_CRUD_SUCCESS: {
      state.result.splice(state.result.findIndex(action.payload), 1);
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.DELETE_CRUD_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    default: {
      return state;
    }
  }
}
