'use client';

import {
  faEnvelope,
  faStar,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  RadioGroup,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes';
import { useState } from 'react';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from 'react-country-state-city';
import ImageUpload from './ImageUpload';
import { redirect } from 'next/navigation';
import { saveJob } from '../actions/jobActions';

export default function JobForm({ orgId }: { orgId: string }) {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);

  const [countryName, setCountryName] = useState('');
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = useState('');

  async function handleSubmit(data: FormData) {
    data.set('country', countryName.toString());
    data.set('state', stateName.toString());
    data.set('city', cityName.toString());
    data.set('countryId', countryId.toString());
    data.set('stateId', stateId.toString());
    data.set('cityId', cityId.toString());
    data.set('orgId', orgId);
    const jobDoc = await saveJob(data);
    redirect(`/jobs/${jobDoc.orgId}`);
  }

  return (
    <Theme>
      <form
        action={handleSubmit}
        className='container mt-6 flex flex-col gap-4'
      >
        <TextField.Root name='title' placeholder='Job title' />

        <div className='grid sm:grid-cols-3 gap-6 *:grow'>
          <div>
            Remote?
            <RadioGroup.Root defaultValue='hybrid' name='remote'>
              <RadioGroup.Item value='onsite'>On-site</RadioGroup.Item>
              <RadioGroup.Item value='hybrid'>Hybrid-remote</RadioGroup.Item>
              <RadioGroup.Item value='remote'>Fully remote</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Full time?
            <RadioGroup.Root defaultValue='full' name='type'>
              <RadioGroup.Item value='project'>Project</RadioGroup.Item>
              <RadioGroup.Item value='part'>Part-time</RadioGroup.Item>
              <RadioGroup.Item value='full'>Full-time</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Salary
            <TextField.Root type='number' name='salary'>
              <TextField.Slot>$</TextField.Slot>
              <TextField.Slot>k/year</TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div>
          Location
          <div className='flex flex-col sm:flex-row gap-4 *:grow'>
            <CountrySelect
              onChange={(e: any) => {
                setCountryId(e.id);
                setCountryName(e.name);
              }}
              placeHolder='Select Country'
            />
            <StateSelect
              countryid={countryId}
              onChange={(e: any) => {
                setStateId(e.id);
                setStateName(e.name);
              }}
              placeHolder='Select State'
            />
            <CitySelect
              countryid={countryId}
              stateid={stateId}
              onChange={(e: any) => {
                setCityId(e.id);
                setCityName(e.name);
              }}
              placeHolder='Select City'
            />
          </div>
        </div>
        <div className='sm:flex'>
          <div className='w-1/3'>
            <h3>Job icon</h3>
            <ImageUpload name='jobIcon' icon={faStar} />
          </div>
          <div className='grow'>
            <h3>Contact person</h3>
            <div className='flex gap-2'>
              <div>
                <ImageUpload name='contactPhoto' icon={faUser} />
              </div>
              <div className='grow flex flex-col gap-1'>
                <TextField.Root placeholder='John Doe' name='contactName'>
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faUser} />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root
                  placeholder='Phone'
                  type='tel'
                  name='contactPhone'
                >
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faPhone} />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root
                  placeholder='Email'
                  type='email'
                  name='contactEmail'
                >
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        </div>
        <TextArea
          placeholder='Job description'
          resize={'vertical'}
          name='description'
        />
        <div className='flex justify-center'>
          <Button size={'3'}>
            <span className='px-8'>Save</span>
          </Button>
        </div>
      </form>
    </Theme>
  );
}
