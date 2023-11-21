async function apiResponse (url='', options = null, errr = null) {
  try {  const response = await fetch(url,options);
    if (!(response.ok)) {
       throw Error ('Please reload the page')
        }
    } catch (error) {
        errr = error.message
    } finally {
        return errr;
    }

}

export default apiResponse