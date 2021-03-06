import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {

    return (
        <Popover className='main-width'>
            <Popover.Panel>
                <WidgetForm></WidgetForm>
            </Popover.Panel>

            <Popover.Button className='button group'>
                <ChatTeardropDots className='ChatTeardropDots' />

                <span className='title-width'><span></span>Feedback</span>
            </Popover.Button>
        </Popover>
        
    )
}