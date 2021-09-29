import React from 'react'
import BuckList from './BuckList'
import BuckInput from './BuckInput'
import { useState } from 'react'
import uuid from "react-uuid"
import moment from "moment"

function BuckMain() {
	const [bucketList,setBuckList] = useState([

	])

	const buck_insert = (bucket_text) =>{
		const bucket = {
			b_id : uuid(),
			b_start_date : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
			b_title : bucket_text,
			b_flag : 0,
			b_end_date : "",
			b_end_check : false,
			b_cancel : false
		}
		// 원래 있던 bucketList에 새로운 bucket을 추가하기
		setBuckList([...bucketList, bucket])
	}

	const flag_change = (id) => {
		const _bucketList = bucketList.map((bucket)=>{
			/**
			 * 전달받은 id와 같은 항목의 flag를 1 증가시키기
			 */
			if(bucket.b_id === id){
				return {
					...bucket,
					b_flag : bucket.b_flag + 1,
				}
			} else {
				return bucket
			}
		})
		// 원래의 bucketList를 _bucketList로 바꿈
		setBuckList(_bucketList)
	}

	const bucket_update = (id,title)=> {
		const _bucketList = bucketList.map(bucket=>{
			if(bucket.b_id === id) {
				return {...bucket,
					b_title : title }
				} else {
					return bucket
			}
			
		})
		setBuckList(_bucketList)
	}

	const bucket_complete = (id)=>{
		bucketList.map(bucket=>{
			if(bucket.b_id === id) {
				return {
					...bucket,
					b_end_date : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
					b_end_check : true
				}
			} else {
				return bucket
			}
		})
	}

	const args = {
		bycketList:bucketList,
		flag_change : flag_change,
		bucket_update : bucket_update,
		bucket_complete : bucket_complete,
	}

	return (
		<div className="w3-container-fluid">
			<BuckInput buck_insert={buck_insert}/>
			{/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기 */}
			<BuckList args={args} 
			// bucketList={bucketList} flag_change={flag_change} bucket_update={bucket_update}
			/>
		</div>
	
	)
}

export default BuckMain
