import axios from "axios";

// Action to get the user data
export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });

    const { data } = await axios.get("/api/v1/user");

    // Check if 'data' and 'data.user' are defined before dispatching the success action
    if (data && data.user) {
      dispatch({
        type: "GET_USER_SUCCESS",
        payload: data.user,
      });
    } else {
      dispatch({
        type: "GET_USER_FAILURE",
        payload: "User data not found",
      });
    }
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "GET_USER_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action for login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "LOGIN_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action for logout
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const { data } = await axios.get("/api/v1/logout");

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to load user data
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });

    const { data } = await axios.get("/api/v1/me");

    // Ensure 'data' and 'data.user' are available before dispatching the success action
    if (data && data.user) {
      dispatch({
        type: "LOAD_USER_SUCCESS",
        payload: data.user,
      });
    } else {
      dispatch({
        type: "LOAD_USER_FAILURE",
        payload: "User data not found",
      });
    }
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to update user profile
export const updateUser = (name, email, password, skills, about) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_USER_REQUEST",
    });

    const { data } = await axios.put(
      "/api/v1/admin/update",
      { name, email, password, skills, about },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "UPDATE_USER_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to add timeline
export const addTimeline = (title, description, date) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/admin/timeline/add",
      { title, description, date },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to delete timeline
export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/timeline/${id}`);

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to add youtube link
export const addYoutube = (title, url, image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_YOUTUBE_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/admin/youtube/add",
      { title, url, image },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "ADD_YOUTUBE_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to delete youtube link
export const deleteYoutube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_YOUTUBE_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/youtube/${id}`);

    dispatch({
      type: "DELETE_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "DELETE_YOUTUBE_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to add project
export const addProject = (title, url, image, description, techStack) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_PROJECT_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/admin/project/add",
      { title, url, image, description, techStack },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "ADD_PROJECT_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to delete project
export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/project/${id}`);

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: errorMessage,
    });
  }
};

// Action to contact us
export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/contact",
      { name, email, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred";
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: errorMessage,
    });
  }
};
