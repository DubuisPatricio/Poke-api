const endpointBuilder = ({ url, endpoint, id, params }) => {
  if (id) {
    return url + endpoint + id;
  } else if (params) {
    return url + endpoint + params;
  } else {
    return url + endpoint;
  }
};

export default endpointBuilder;
