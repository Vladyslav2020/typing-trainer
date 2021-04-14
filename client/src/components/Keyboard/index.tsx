import React from 'react';
import './index.css';
import { PropTypes } from './intefaces';

const Keyboad: React.FC<PropTypes> = (props) => {
    let activeButtons: string[] = [];
    if (props.char.length > 1){
        activeButtons.push(props.char);
    }
    else
    if (props.char === ' '){
        activeButtons.push('Space');
    }
    else
    if (props.char.toUpperCase() === props.char){
        activeButtons.push(props.char);
        activeButtons.push("LeftShift");
    }
    else{
        activeButtons.push(props.char.toUpperCase());
        if ("~!@#$%^&*()_+{}|\":?<>".indexOf(props.char) !== -1)
            activeButtons.push("RightShift");
    }
    let keyboard = [
        [{content: <>~<br/>`</>, text: '~ `', classes: ["key"]}, {content: <>!<br/>1</>, text: '! 1', classes: ["key"]}, {content: <>@<br/>2</>, text: '@ 2', classes: ["key"]}, 
        {content: <>#<br/>3</>, text: '# 3', classes: ["key"]}, {content: <>$<br/>4</>, text: '$ 4',  classes: ["key"]}, {content: <>%<br/>5</>, text: '% 5', classes: ["key"]},
        {content: <>^<br/>6</>, text: '^ 6', classes: ["key"]}, {content: <>&amp;<br/>7</>, text: '& 7', classes: ["key"]}, {content: <>*<br/>8</>, text: '* 8', classes: ["key"]},
        {content: <>(<br/>9</>, text: '( 9', classes: ["key"]}, {content: <>)<br/>0</>, text: ') 0', classes: ["key"]}, {content: <>—<br/>_</>, text: '_ —', classes: ["key"]},
        {content: <>+<br/>=</>, text: '+ =', classes: ["key"]}, {content: <>Backspace</>, text: 'Backspace', classes: ["key"]}],
        [{content: <>Tab</>, text: 'Tab', classes: ["key"]}, {content: <>Q</>, text: 'Q', classes: ["key"]}, {content: <>W</>, text: 'W', classes: ["key"]}, 
        {content: <>E</>, text: 'E', classes: ["key"]}, {content: <>R</>, text: 'R', classes: ["key"]}, {content: <>T</>, text: 'T', classes: ["key"]},
        {content: <>Y</>, text: 'Y', classes: ["key"]}, {content: <>U</>, text: 'U', classes: ["key"]}, {content: <>I</>, text: 'I', classes: ["key"]},
        {content: <>O</>, text: 'O', classes: ["key"]}, {content: <>P</>, text: 'P', classes: ["key"]}, {content: <>{'{'}<br/>[</>, text: '{ [', classes: ["key"]},
        {content: <>{'}'}<br/>]</>, text: '} ]', classes: ["key"]}, {content: <>{'|'}<br/>\</>, text: '| \\', classes: ["key"]}],
        [{content: <>Caps Lock</>, text: 'CapsLock', classes: ["key"]}, {content: <>A</>, text: 'A', classes: ["key"]}, {content: <>S</>, text: 'S', classes: ["key"]}, 
        {content: <>D</>, text: 'D', classes: ["key"]}, {content: <>F</>, text: 'F', classes: ["key"]}, {content: <>G</>, text: 'G', classes: ["key"]},
        {content: <>H</>, text: 'H', classes: ["key"]}, {content: <>J</>, text: 'J', classes: ["key"]}, {content: <>K</>, text: 'K', classes: ["key"]},
        {content: <>L</>, text: 'L', classes: ["key"]}, {content: <>:<br/>;</>, text: ': ;', classes: ["key"]}, {content: <>"<br/>'</>, text: '" \'', classes: ["key"]},
        {content: <>Enter</>, text: 'Enter', classes: ["key"]}],
        [{content: <>Shift</>, text: 'LeftShift', classes: ["key", "large-2"]}, {content: <>Z</>, text: 'Z', classes: ["key"]}, {content: <>X</>, text: 'X', classes: ["key"]}, 
        {content: <>C</>, text: 'C', classes: ["key"]}, {content: <>V</>, text: 'V', classes: ["key"]}, {content: <>B</>, text: 'B', classes: ["key"]},
        {content: <>N</>, text: 'N', classes: ["key"]}, {content: <>M</>, text: 'M', classes: ["key"]}, {content: <>{'<'}<br/>,</>, text: '< ,', classes: ["key"]},
        {content: <>{'>'}<br/>.</>, text: '> .', classes: ["key"]}, {content: <>?<br/>/</>, text: '? /', classes: ["key"]}, {content: <>Shift</>, text: 'RightShift', classes: ["key", "large-2"]}],
        [{content: <>Ctrl</>, text: 'LeftCtrl', classes: ["key"]}, {content: <>Fn</>, text: 'LeftFn', classes: ["key"]}, {content: <>Win</>, text: 'LeftWin', classes: ["key"]}, 
        {content: <>Alt</>, text: 'LeftAlt', classes: ["key"]}, {content: <>Space</>, text: 'Space', classes: ["key", "large-3"]}, {content: <>Alt</>, text: 'RigthAlt', classes: ["key"]},
        {content: <>Fn</>, text: 'RightFn', classes: ["key"]}, {content: <>Ctrl</>, text: 'RightCtrl', classes: ["key"]}]
    ];
    const keyboardBody = keyboard.map((row, index) => {
        const Row = row.map((key, index) => {
            let classes = [...key.classes];
            key.text.split(' ').forEach(item => {
                if (activeButtons.includes(item)){
                    classes.push("active");
                    return;
                }
            });
            return (
                <div key = {index} className = {classes.join(" ")}>
                    {key.content}
                </div>
            );
        });
        return <div key = {index} className = 'row'>{Row}</div>;
    })
    return (
        <div className = 'keyboard'>
            {keyboardBody}
            {/* <div className = 'row'>
                <div className = {activeButtons.includes('~') || activeButtons.includes('`')? 'key active': 'key'}>
                    ~<br/>`
                </div>
                <div className = {activeButtons.includes('!') || activeButtons.includes('1')? 'key active': 'key'}>
                    !<br/>1
                </div>
                <div className = {activeButtons.includes('@') || activeButtons.includes('2')? 'key active': 'key'}>
                    @<br/>2
                </div>
                <div className = {activeButtons.includes('#') || activeButtons.includes('3')? 'key active': 'key'}>
                    #<br/>3
                </div>
                <div className = {activeButtons.includes('$') || activeButtons.includes('4')? 'key active': 'key'}>
                    $<br/>4
                </div>
                <div className = {activeButtons.includes('%') || activeButtons.includes('5')? 'key active': 'key'}>
                    %<br/>5
                </div>
                <div className = {activeButtons.includes('^') || activeButtons.includes('6')? 'key active': 'key'}>
                    ^<br/>6
                </div>
                <div className = {activeButtons.includes('&') || activeButtons.includes('7')? 'key active': 'key'}>
                    &amp;<br/>7
                </div>
                <div className = {activeButtons.includes('*') || activeButtons.includes('8')? 'key active': 'key'}>
                    *<br/>8
                </div>
                <div className = {activeButtons.includes('(') || activeButtons.includes('9')? 'key active': 'key'}>
                    (<br/>9
                </div>
                <div className = {activeButtons.includes(')') || activeButtons.includes('0')? 'key active': 'key'}>
                    )<br/>0
                </div>
                <div className = {activeButtons.includes('—') || activeButtons.includes('=')|| activeButtons.includes('-')? 'key active': 'key'}>
                    —<br/>_
                </div>
                <div className = {activeButtons.includes('+') || activeButtons.includes('=')? 'key active': 'key'}>
                    +<br/>=
                </div>
                <div className = {activeButtons.includes('Backspace')? 'key active': 'key'}>
                    Backspace
                </div>
            </div>
            <div className = 'row'>
                <div className = {activeButtons.includes('Tab')? 'key active': 'key'}>
                    Tab
                </div>
                <div className = {activeButtons.includes('Q')? 'key active': 'key'}>
                    Q
                </div>
                <div className = {activeButtons.includes('W')? 'key active': 'key'}>
                    W
                </div>
                <div className = {activeButtons.includes('E')? 'key active': 'key'}>
                    E
                </div>
                <div className = {activeButtons.includes('R')? 'key active': 'key'}>
                    R
                </div>
                <div className = {activeButtons.includes('T')? 'key active': 'key'}>
                    T
                </div>
                <div className = {activeButtons.includes('Y')? 'key active': 'key'}>
                    Y
                </div>
                <div className = {activeButtons.includes('U')? 'key active': 'key'}>
                    U
                </div>
                <div className = {activeButtons.includes('I')? 'key active': 'key'}>
                    I
                </div>
                <div className = {activeButtons.includes('O')? 'key active': 'key'}>
                    O
                </div>
                <div className = {activeButtons.includes('P')? 'key active': 'key'}>
                    P
                </div>
                <div className = {activeButtons.includes('{') || activeButtons.includes('[')? 'key active': 'key'}>
                    {'{'}<br/>[
                </div>
                <div className = {activeButtons.includes('}') || activeButtons.includes(']')? 'key active': 'key'}>
                    {'}'}<br/>]
                </div>
                <div className = {activeButtons.includes('|') || activeButtons.includes('\\')? 'key active': 'key'}>
                    {'|'}<br/>\
                </div>
            </div>
            <div className = 'row'>
                <div className = {activeButtons.includes('CapsLock')? 'key active': 'key'}>
                    Caps Lock
                </div>
                <div className = {activeButtons.includes('A')? 'key active': 'key'}>
                    A
                </div>
                <div className = {activeButtons.includes('S')? 'key active': 'key'}>
                    S
                </div>
                <div className = {activeButtons.includes('D')? 'key active': 'key'}>
                    D
                </div>
                <div className = {activeButtons.includes('F')? 'key active': 'key'}>
                    F
                </div>
                <div className = {activeButtons.includes('G')? 'key active': 'key'}>
                    G
                </div>
                <div className = {activeButtons.includes('H')? 'key active': 'key'}>
                    H
                </div>
                <div className = {activeButtons.includes('J')? 'key active': 'key'}>
                    J
                </div>
                <div className = {activeButtons.includes('K')? 'key active': 'key'}>
                    K
                </div>
                <div className = {activeButtons.includes('L')? 'key active': 'key'}>
                    L
                </div>
                <div className = {activeButtons.includes(':') || activeButtons.includes(';')? 'key active': 'key'}>
                    :<br/>;
                </div>
                <div className = {activeButtons.includes('"') || activeButtons.includes('\'')? 'key active': 'key'}>
                    "<br/>'
                </div>
                <div className = {activeButtons.includes('Enter')? 'key active': 'key'}>
                    Enter
                </div>
            </div>
            <div className = 'row'>
                <div className = {activeButtons.includes('LeftShift')? 'key large-2 active': 'key large-2'}>
                   Shift
                </div>
                <div className = {activeButtons.includes('Z')? 'key active': 'key'}>
                    Z
                </div>
                <div className = {activeButtons.includes('X')? 'key active': 'key'}>
                    X
                </div>
                <div className = {activeButtons.includes('C')? 'key active': 'key'}>
                    C
                </div>
                <div className = {activeButtons.includes('V')? 'key active': 'key'}>
                    V
                </div>
                <div className = {activeButtons.includes('B')? 'key active': 'key'}>
                    B
                </div>
                <div className = {activeButtons.includes('N')? 'key active': 'key'}>
                    N
                </div>
                <div className = {activeButtons.includes('M')? 'key active': 'key'}>
                    M
                </div>
                <div className = {activeButtons.includes('<') || activeButtons.includes(',')? 'key active': 'key'}>
                    {'<'}<br/>,
                </div>
                <div className = {activeButtons.includes('>') || activeButtons.includes('.')? 'key active': 'key'}>
                    {'>'}<br/>.
                </div>
                <div className = {activeButtons.includes('?') || activeButtons.includes('/')? 'key active': 'key'}>
                    ?<br/>/
                </div>
                <div className = {activeButtons.includes('RightShift')? 'key large-2 active': 'key large-2'}>
                    Shift
                </div>
            </div>
            <div className = 'row'>
                <div className = {activeButtons.includes('LeftControl')? 'key active': 'key'}>
                   Ctrl
                </div>
                <div className = {activeButtons.includes('LeftFn')? 'key active': 'key'}>
                    Fn
                </div>
                <div className = {activeButtons.includes('LeftWin')? 'key active': 'key'}>
                    Win
                </div>
                <div className = {activeButtons.includes('LeftAlt')? 'key active': 'key'}>
                    Alt
                </div>
                <div className = {activeButtons.includes('Space')? 'key large-3 active': 'key large-3'}>
                    Space
                </div>
                <div className = {activeButtons.includes('RightAlt')? 'key active': 'key'}>
                    Alt
                </div>
                <div className = {activeButtons.includes('L')? 'key active': 'key'}>
                    Fn
                </div>
                <div className = {activeButtons.includes('RightControl')? 'key active': 'key'}>
                    Ctrl
                </div>
            </div> */}
        </div>
    );
}

export default Keyboad;