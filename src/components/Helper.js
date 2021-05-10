import contentstack from 'contentstack';

const Stack = contentstack.Stack(process.env.REACT_APP_CONTENTSTACK_API_KEY, process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN, process.env.REACT_APP_CONTENTSTACK_PUBLISH_ENVIRONMENT, process.env.REACT_APP_CONTENTSTACK_REGION ? process.env.REACT_APP_CONTENTSTACK_REGION : '');

export function getEntry(contentTypeUid) {
  return new Promise((resolve, reject) => {
    const query = Stack.ContentType(contentTypeUid).Query();
    query
      .toJSON()
      .find()
      .then(
        (result) => {
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
