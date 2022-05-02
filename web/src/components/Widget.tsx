import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';

export function Widget() {

    return (
        <Popover className='main-width'>
            <Popover.Panel>Hello uwu</Popover.Panel>

            <Popover.Button className='button group'>
                <ChatTeardropDots className='ChatTeardropDots' />

                <span className='title-width'><span></span>Feedback</span>
            </Popover.Button>
        </Popover>
        
    )
}