/**
 * @flow
 * @file Editable Skill Keywords card component
 * @author Box
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import PillSelector from 'box-react-ui/lib/components/pill-selector-dropdown/PillSelector';
import PrimaryButton from 'box-react-ui/lib/components/primary-button/PrimaryButton';
import Button from 'box-react-ui/lib/components/button/Button';
import messages from '../../../messages';
import getPills from './keywordUtils';
import { SKILLS_TARGETS } from '../../../../interactionTargets';
import type { Pill, Pills } from './flowTypes';
import './EditableKeywords.scss';

type Props = {
    keywords: Array<SkillCardEntry>,
    onAdd: Function,
    onDelete: Function,
    onSave: Function,
    onCancel: Function
};

type State = {
    keyword: string,
    pills: Pills
};

class EditableKeywords extends React.PureComponent<Props, State> {
    props: Props;
    state: State;

    /**
     * [constructor]
     *
     * @public
     * @return {EditableKeywords}
     */
    constructor(props: Props) {
        super(props);
        this.state = { pills: getPills(props.keywords), keyword: '' };
    }

    /**
     * Called when keywords gets new properties.
     * Should reset to original state.
     *
     * @private
     * @param {Object} nextProps - component props
     * @return {void}
     */
    componentWillReceiveProps(nextProps: Props): void {
        this.setState({ pills: getPills(nextProps.keywords), keyword: '' });
    }

    /**
     * Called when keywords gets new properties.
     * Should reset to original state.
     *
     * @private
     * @param {Object} option - pill
     * @param {number} index - pill index
     * @return {void}
     */
    onRemove = (option: Pill, index: number): void => {
        const { onDelete, keywords }: Props = this.props;
        onDelete(keywords[index]);
    };

    /**
     * When pressing enter in the pill input box
     *
     * @private
     * @param {Event} event - keyboard event
     * @return {void}
     */
    onKeyDown = ({ key }: SyntheticKeyboardEvent<HTMLInputElement>): void => {
        if (key === 'Enter') {
            this.onBlur();
        }
    };

    /**
     * Called when pill selector is blurred.
     * Adds a new pill if needed.
     *
     * @private
     * @return {void}
     */
    onBlur = () => {
        const { onAdd }: Props = this.props;
        const { keyword } = this.state;

        if (keyword) {
            onAdd({
                type: 'text',
                text: keyword
            });
        }
    };

    /**
     * Called when pill selector gets new input value.
     *
     * @private
     * @return {void}
     */
    onInput = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        const currentTarget = (event.currentTarget: HTMLInputElement);
        this.setState({
            keyword: currentTarget.value
        });
    };

    /**
     * Renders the keywords
     *
     * @private
     * @return {void}
     */
    render() {
        const { onSave, onCancel }: Props = this.props;
        const { pills, keyword }: State = this.state;
        return (
            <span className='pill-selector-wrapper'>
                <PillSelector
                    onBlur={this.onBlur}
                    onInput={this.onInput}
                    onKeyDown={this.onKeyDown}
                    onPaste={this.onInput}
                    onRemove={this.onRemove}
                    selectedOptions={pills}
                    value={keyword}
                />
                <div className='be-keywords-buttons'>
                    <Button type='button' onClick={onCancel}>
                        <FormattedMessage
                            {...messages.cancel}
                            data-resin-target={SKILLS_TARGETS.KEYWORDS.EDIT_CANCEL}
                        />
                    </Button>
                    <PrimaryButton type='button' onClick={onSave}>
                        <FormattedMessage {...messages.save} data-resin-target={SKILLS_TARGETS.KEYWORDS.EDIT_SAVE} />
                    </PrimaryButton>
                </div>
            </span>
        );
    }
}

export default EditableKeywords;
