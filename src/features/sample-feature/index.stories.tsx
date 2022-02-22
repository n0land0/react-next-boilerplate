import { MockedProvider } from '@apollo/client/testing';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import SampleFeature from '.';

export default {
  title: 'Features/Sample Feature',
  component: SampleFeature,
} as Meta;

const Template: Story = () => <SampleFeature />;

export const Demo: Story = Template.bind({});

// Demo.decorators = [
//   (story) => (
//     <MockedProvider
//       addTypename={false}
//       mocks={[
//         {
//           request: {
//             query: //sample query
//           },
//           result: {
//             data: {
//               //sample data
//             }
//           }
//       }
//       ]}
//     >
//       { story() }
//     </MockedProvider>
//   )
// ];

export const Loading: Story = Template.bind({});
Loading.decorators = [
  (story) => (
    <MockedProvider addTypename={false} mocks={[]}>
      {story()}
    </MockedProvider>
  ),
];
