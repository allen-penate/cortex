import TodoItem from './TodoItem.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: TodoItem,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'TodoItem',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = args => ({
  components: { TodoItem },
  setup() {
    return { args, ...actionsData };
  },
  template: '<TodoItem v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  todo: {
    id: '1',
    title: 'Test Task',
    completed: false,
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const UnCompleted = Template.bind({});
UnCompleted.args = {
  todo: {
    ...Default.args.task,
    completed: false,
  },
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    ...Default.args.task,
    completed: true,
  },
};