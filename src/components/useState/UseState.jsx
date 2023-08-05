import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-noconflict/theme-one_dark'
import { Example1, Example1___2, Example1___4, Example2, example1, example1___2, example1___4, example2, Example2___2, example2___2 } from './Example';

function Ace(props) { return (<><AceEditor defaultValue={props.value} focus={false} mode="jsx" theme="one_dark" width={props.width} readOnly={true} height={props.height} fontSize={15} showPrintMargin={false} /></>) }
function LayoutAce(props) {
    return (
        <>
            <h2 className='text-2xl font-semibold ml-3 pt-5'>{props.title}</h2>
            <div className='w-[98%] mr-auto ml-auto bg-black p-3 rounded-md mb-10'>
                <div className='w-[95%] mr-auto ml-auto'><Ace value={props.Code} width="100%" height={props.height} /></div>
                <div className='w-[95%] mt-3 h-[180px] mr-auto ml-auto bg-zinc-700'>{props.hasilCode}</div>
            </div>
        </>)
}
export default function UseState() {
    return (
        <>
            <section className='w-full bg-neutral-800 text-white'>
                <h1 className='text-3xl font-bold text-center pt-5 pb-5'>UseState</h1>
                <div className='bg-slate-700 w-[95%] mr-auto ml-auto'>
                    <LayoutAce title="Example 1 / Membaca State" Code={example1} height="165px" hasilCode={<Example1 />} />
                    <LayoutAce title="Example 1 / Membaca State Dari Object" Code={example1___2} height="218px" hasilCode={<Example1___2 />} />
                    <LayoutAce title="Example 1 / Membaca State Dari Array" Code={example1___4} height="218px" hasilCode={<Example1___4 />} />
                    <LayoutAce title="Example 2 / Memperbarui State" Code={example2} height="307px" hasilCode={<Example2 />} />
                    <LayoutAce title="Example 2 / Memperbarui State Dengan Type Number / Integer" Code={example2___2} height="360px" hasilCode={<Example2___2 />} />
                </div>
            </section>
        </>
    )
}