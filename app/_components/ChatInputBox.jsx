"use client"
import { Search, Globe, Link, Mic, Settings, Atom, Cpu, File, Paperclip, AudioWaveform, AtomIcon, SearchCheck, SearchIcon, FileKey2Icon, ArrowUp } from "lucide-react"
import { Button } from "../../components/ui/button"
import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { AIModelsOption } from "../../services/Shared"
import { supabase } from '../../services/supabase'
import { useState } from "react"
import { useUser } from '@clerk/nextjs'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation"

  


function ChatInputBox() {
  
  const [userSearchInput,setUserSearchInput]=useState();
  const [searchType, setSearchType] = useState('search')
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSearchQuery = async () => {
    setLoading(true);
    const libId = uuidv4();
    const { data } = await supabase.from('Library').insert([
      {
        searchInput: userSearchInput,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        type: searchType,
        libId: libId
      }
    ]).select();

    router.push('/search/' + libId)
    setLoading(false);
    console.log(data[0]);
  }
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-white">
      {/* Perplexity Logo */}
      <Image src={"/perplexity-text.png"} alt='logo' width={300} height={300}/>

      

        {/* Search Input Container */}
        <div className="w-full mt-15 max-w-4xl">
          <div className="relative mb-6">
            <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              
              {/* Dynamic Text Input Area */}
              <div className="px-4 py-3">
                <textarea
                  placeholder={searchType === 'search' ? "Ask anything..." : "Research anything..."}
                  className="w-full resize-none outline-none text-gray-700 placeholder-gray-400 text-lg min-h-[50px]"
                  rows={1}
                  onChange={(e) => setUserSearchInput(e.target.value)}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100">
                {/* Left Side Buttons */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`rounded-full px-5 ${
                      searchType === 'search'
                        ? 'bg-teal-100 border-teal-500 text-teal-700'
                        : 'bg-gray-50 border-gray-200 text-teal-500 hover:text-teal-600'
                    }`}
                    onClick={() => setSearchType('search')}
                  >
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`rounded-full px-5 ${
                      searchType === 'research'
                        ? 'bg-teal-100 border-teal-500 text-teal-700'
                        : 'bg-white border-gray-200 text-gray-600 hover:text-teal-600'
                    }`}
                    onClick={() => setSearchType('research')}
                  >
                    <AtomIcon className="h-4 w-4 mr-2" />
                    Research
                  </Button>
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Cpu className="h-6 w-6" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {AIModelsOption.map((model, index) => (
                        <DropdownMenuItem key={index}>
                          <div className="mb-1">
                            <h2 className="text-sm">{model.name}</h2>
                            <p className="text-xs">{model.desc}</p>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <button className="text-gray-400 hover:text-gray-600">
                    <Globe className="h-6 w-6" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Paperclip className="h-6 w-6" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Mic className="h-6 w-6" />
                  </button>
                  <button className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600" 
                  onClick={() => {
                    userSearchInput ? onSearchQuery() : null
                  }}>
                    {!userSearchInput?<AudioWaveform className="h-6 w-6" />
                    :<ArrowUp className="h-6 w-6" disabled={loading} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        

        {/* Quick Access Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <FileKey2Icon className="h-4 w-4 mr-2" />
            Summarize
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 12h6M12 9v6M12 3a9 9 0 100 18 9 9 0 000-18z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Plan
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Analyze
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <Search className="h-4 w-4 mr-2" />
            Compare
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatInputBox
