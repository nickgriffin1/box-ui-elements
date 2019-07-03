/**
 * @flow
 * @file i18n messages
 * @author Box
 */

import { defineMessages } from 'react-intl';

const messages = defineMessages({
    commentCancel: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.commentCancel',
        defaultMessage: 'Cancel',
        description: 'Text for cancel button',
    },
    commentPost: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.commentPost',
        defaultMessage: 'Post',
        description: 'Text for post button',
    },
    commentWrite: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.commentWrite',
        defaultMessage: 'Write a comment',
        description: 'Placeholder for comment input',
    },

    approvalAddAssignee: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.approvalAddAssignee',
        defaultMessage: 'Add an assignee',
        description: 'Placeholder for approvers input',
    },
    approvalAddTask: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.approvalAddTask',
        defaultMessage: 'Add Task',
        description: 'Label for checkbox to add approvers to a comment',
    },
    approvalAddTaskTooltip: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.approvalAddTaskTooltip',
        defaultMessage:
            'Assigning a task to someone will send them a notification with the message in the comment box and allow them to approve or deny.',
        description: 'Tooltip text for checkbox to add approvers to a comment',
    },
    approvalAssignees: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.approvalAssignees',
        defaultMessage: 'Assignees',
        description: 'Title for assignees input',
    },
    approvalDueDate: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.approvalDueDate',
        defaultMessage: 'Due Date',
        description: 'Title for approvers due date input',
    },
    approvalSelectDate: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.approvalSelectDate',
        defaultMessage: 'Select a date',
        description: 'Placeholder for due date input',
    },
    atMentionTip: {
        id: 'be.contentSidebar.activityFeed.approvalCommentForm.atMentionTip',
        defaultMessage: '@mention users to notify them.',
        description: 'Mentioning call to action displayed below the comment input',
    },
});

export default messages;
