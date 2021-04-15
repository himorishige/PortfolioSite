import { useCallback, useState } from 'react';
import { Work } from 'src/types';

import { API, graphqlOperation } from 'aws-amplify';
import { SearchWorksQuery } from 'src/API';
import { GraphQLResult } from '@aws-amplify/api-graphql';

import { searchWorks } from 'src/graphql/queries';
import awsconfig from 'src/aws-exports';

export const useFetchWorks = () => {
  API.configure(awsconfig);
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchWorks = useCallback(async () => {
    setLoading(true);
    setError(false);

    const querySort = Object.assign(
      {},
      {
        sort: {
          field: 'createdAt',
          direction: 'desc',
        },
      },
    );
    try {
      const results = (await API.graphql(
        graphqlOperation(searchWorks, querySort),
      )) as GraphQLResult<SearchWorksQuery>;

      if (results.data?.searchWorks?.items) {
        // console.log(results.data.searchWorks.items);
        setWorks(results.data.searchWorks.items as Work[]);
      }
    } catch (error) {
      console.log(error.errors[0]?.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchWorks, works, loading, error };
};
