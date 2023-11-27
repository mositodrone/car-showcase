"use client"

import { ShowMoreProps, updateSearchParams } from '@/types'
import { useRouter } from 'next/navigation'
import { CustomButton } from '.'

const ShowMore = ({ pageNumber, isNext, setLimit } : ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        setLimit(newLimit)

        // const newPathName = updateSearchParams("limit", `${newLimit}`);

        // router.push(newPathName);
    }
    
    
    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton
                    title="show more"
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )

            }
        </div>
    )
}

export default ShowMore