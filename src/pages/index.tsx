'use client' 
import { useEffect } from 'react'
import LoginButton from './login'
import { useAccount } from 'wagmi';
import { useActiveProfile } from '@lens-protocol/react-web';

export default function Home() {
  const { isConnected } = useAccount();
  const { data, error, loading } = useActiveProfile();

  useEffect(() => {
  }, [isConnected])

  if(isConnected)
  {
    if(loading)
    {
      return (
        <div>
          <div>Loading...</div>
        </div>
      )
    }
    if(error)
    {
      return (
        <div>
          <div>{error.message}</div>
        </div>
      )
    }

    if(data==null)
    {
      return (
        <div>
          <div>No active profile selected</div>
        </div>
      )
    }

    return (
      <div>
          <div>@{data.handle}</div>
      </div>
    )
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      padding: '40px' 
    }}>
      <LoginButton/>
    </div>
  );
}