import gql from 'graphql-tag';

const allEvents = ({ pagination: { page, perPage }}) =>   ({
  query: gql`
    query ($limit: Int, $offset: Int){
      allEvents (limit:$limit, offset:$offset)  {
        id
        eventId
        name
        date
        ownerId
        cancelled
        eventType
        eventTypeName
      }
    }
  `,
  variables: {
    offset: (page - 1) * perPage,
    limit: page * perPage,
  }
});

const oneEvent = ({ id }) => ({
  query: gql`
    query ($id:String) {
      oneEvent (id:$id)  {
        id
        eventId
        name
        date
        ownerId
        cancelled
        eventType
        eventTypeName
      }
    }
  `,
  variables: { id },
});

export default {
  allEvents,
  oneEvent,
}
