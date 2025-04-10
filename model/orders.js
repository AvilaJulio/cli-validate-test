cube(`Orders`, {
    sql: `SELECT *
          FROM public.orders`,

    preAggregations: {
        // Pre-Aggregations definitions go here
        // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
        main: {
            measures: [
                CUBE.count,
                CUBE.cd,
            ],
            timeDimension: CUBE.createdAt,
            granularity: `day`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [id, createdAt]
        },

        number: {
            sql: `number`,
            type: `sum`
        },

        cd: {
            sql: `user_id`,
            type: `countDistinctApprox`
        }
    },

    dimensions: {
        id: {
            sql: `id`,
            type: `number`,
            primaryKey: true
        },

        status: {
            sql: `status`,
            type: `string`
        },

        status_test: {
          sql: 'status',
          type: `string`
        },

        createdAt: {
            sql: `created_at`,
            type: `time`
        },

        completedAt: {
            sql: `completed_at`,
            type: `time`
        },

        user_id: {
            sql: `user_id`,
            type: `number`

    },
});
