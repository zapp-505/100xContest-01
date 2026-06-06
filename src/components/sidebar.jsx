import { SidebarTogle } from './icons/SidebarToggle'
import { Sidesub } from './sidebarsub';

export function Sidebar({sidebarOpen,setSidebarOpen}){
    return <>
            <div className={sidebarOpen?"w-96 h-screen bg-red-200 sm:block hidden":"fixed top-0 w-0 left-0 bg-red-200 sm:block hidden transition-all duration-300"}>
                <div className='cursor-pointer w-fit hover:bg-slate-200 absolute' onClick={()=>{
                  setSidebarOpen(!sidebarOpen);
                }}>
                  <SidebarTogle />  
                </div>
                <br /> <br /> <br />
                <div className='flex flex-col gap-4'>
                    <Sidesub name={"Home"} Svg={SidebarTogle}/>
                    <Sidesub name={"Home"} Svg={SidebarTogle}/>
                    <Sidesub name={"Home"} Svg={SidebarTogle}/>
                    <Sidesub name={"Home"} Svg={SidebarTogle}/>
                    <Sidesub name={"Home"} Svg={SidebarTogle}/>
                </div>
                
            </div>
        </>
}