'use client';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

export default function Home() {
	return <form
		className="w-fit flex flex-col items-center mt-[16rem] mx-auto border border-gray-300 rounded-md py-4 px-8">
		<span className='p-input-icon-right mb-4'>
			<i className='pi pi-user' />
			<InputText name='username' placeholder='Username' />
		</span>

		<Password name='password' placeholder='Password' feedback={false} tabIndex={1} toggleMask required />


		<Button label='Login' className='mt-5 w-full' size='large' />
	</form>
}
