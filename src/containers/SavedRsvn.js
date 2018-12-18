import SavedRsvnView from '../components/SavedRsvnView';
import React, { Component } from 'react';

export default class SavedRsvn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 41,
          room: 12,
          guest: 2,
          num_guest: 3,
          check_in_date: '2018-12-15',
          check_out_date: '2018-12-20',
          reserved_dates: [
            {
              reserved_date: '2018-12-16',
            },
            {
              reserved_date: '2018-12-17',
            },
            {
              reserved_date: '2018-12-18',
            },
            {
              reserved_date: '2018-12-19',
            },
          ],
        },
        {
          id: 42,
          room: 17,
          guest: 2,
          num_guest: 2,
          check_in_date: '2018-12-20',
          check_out_date: '2018-12-23',
          reserved_dates: [
            {
              reserved_date: '2018-12-21',
            },
            {
              reserved_date: '2018-12-22',
            },
          ],
        },
        {
          id: 43,
          room: 10,
          guest: 2,
          num_guest: 2,
          check_in_date: '2018-12-24',
          check_out_date: '2018-12-25',
          reserved_dates: [],
        },
        {
          id: 44,
          room: 9,
          guest: 2,
          num_guest: 2,
          check_in_date: '2018-12-25',
          check_out_date: '2018-12-28',
          reserved_dates: [
            {
              reserved_date: '2018-12-26',
            },
            {
              reserved_date: '2018-12-27',
            },
          ],
        },
      ],
    };
  }

  render() {
    return <SavedRsvnView {...this.state} />;
  }
}
