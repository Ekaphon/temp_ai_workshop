import { useState } from 'react'

function App() {
  const [selectedDate, setSelectedDate] = useState(8);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen p-6">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-purple-500 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Academy</span>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-2">
            <div className="bg-purple-100 text-purple-700 px-4 py-3 rounded-lg font-medium">
              📊 Dashboard
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              📚 Courses
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              💬 Chats
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              📊 Grades
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              📅 Schedule
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              ⚙️ Settings
            </div>
          </nav>
          
          {/* Premium Subscription */}
          <div className="mt-8 bg-purple-100 rounded-xl p-4">
            <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <h3 className="font-semibold text-gray-800 text-center mb-2">Premium subscription</h3>
            <p className="text-sm text-gray-600 text-center mb-4">Buy Premium and get access to new courses</p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700">
              More detailed
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-gray-100 px-4 py-2 rounded-lg pr-10 w-64"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
              </div>
              <span className="text-gray-400">🔔</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 font-medium">Profile</span>
                <span className="text-gray-400">✏️</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-2">
              {/* New Courses */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">New Courses</h2>
                <div className="grid grid-cols-3 gap-4">
                  {/* Geography Course */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-full h-32 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">🗺️</span>
                    </div>
                    <h3 className="font-semibold mb-1">Geography</h3>
                    <p className="text-sm text-gray-500 mb-3">12 lessons</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">
                        →
                      </div>
                    </div>
                  </div>
                  
                  {/* JavaScript Course */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-full h-32 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">💻</span>
                    </div>
                    <h3 className="font-semibold mb-1">JavaScript Course</h3>
                    <p className="text-sm text-gray-500 mb-3">15 lessons</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-red-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full text-white text-xs flex items-center justify-center">
                        →
                      </div>
                    </div>
                  </div>
                  
                  {/* Photography Course */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-full h-32 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                    <h3 className="font-semibold mb-1">Photography Course</h3>
                    <p className="text-sm text-gray-500 mb-3">8 lessons</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* My Courses */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">My Courses</h2>
                  <span className="text-purple-600 cursor-pointer">View All</span>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-500 mb-4">
                    <div>Course name</div>
                    <div>Start</div>
                    <div>Rate</div>
                    <div>Level</div>
                    <div></div>
                  </div>
                  
                  {/* Course Rows */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-5 gap-4 items-center py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600">🎨</span>
                        </div>
                        <div>
                          <div className="font-medium">Web Design</div>
                          <div className="text-sm text-gray-500">10 lessons</div>
                        </div>
                      </div>
                      <div className="text-gray-600">May 12</div>
                      <div className="text-gray-600">4.8</div>
                      <div className="text-gray-600">Elementary</div>
                      <div></div>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 items-center py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600">💻</span>
                        </div>
                        <div>
                          <div className="font-medium">Development Basics</div>
                          <div className="text-sm text-gray-500">8 lessons</div>
                        </div>
                      </div>
                      <div className="text-gray-600">May 14</div>
                      <div className="text-gray-600">4.4</div>
                      <div className="text-gray-600">Intermediate</div>
                      <div></div>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 items-center py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                          <span className="text-pink-600">🐍</span>
                        </div>
                        <div>
                          <div className="font-medium">Data with Python</div>
                          <div className="text-sm text-gray-500">5 lessons</div>
                        </div>
                      </div>
                      <div className="text-gray-600">May 17</div>
                      <div className="text-gray-600">4.6</div>
                      <div className="text-gray-600">Intermediate</div>
                      <div></div>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 items-center py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600">📝</span>
                        </div>
                        <div>
                          <div className="font-medium">Html Basics</div>
                          <div className="text-sm text-gray-500">12 lessons</div>
                        </div>
                      </div>
                      <div className="text-gray-600">May 26</div>
                      <div className="text-gray-600">4.7</div>
                      <div className="text-gray-600">Elementary</div>
                      <div></div>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 items-center py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600">⚡</span>
                        </div>
                        <div>
                          <div className="font-medium">JavaScript</div>
                          <div className="text-sm text-gray-500">8 lessons</div>
                        </div>
                      </div>
                      <div className="text-gray-600">May 30</div>
                      <div className="text-gray-600">4.9</div>
                      <div className="text-gray-600">Elementary</div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              {/* Profile Card */}
              <div className="bg-white rounded-xl p-6 mb-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Esther Howard</h3>
                <p className="text-sm text-gray-500 mb-2">Elementary</p>
              </div>
              
              {/* Calendar */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">May 2022</h3>
                  <div className="flex space-x-2">
                    <button className="p-1">←</button>
                    <button className="p-1">→</button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2">
                  <div className="text-center py-2">Sun</div>
                  <div className="text-center py-2">Mon</div>
                  <div className="text-center py-2">Tue</div>
                  <div className="text-center py-2">Wed</div>
                  <div className="text-center py-2">Thu</div>
                  <div className="text-center py-2">Fri</div>
                  <div className="text-center py-2">Sat</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(35)].map((_, i) => {
                    const day = i - 6 + 1;
                    if (day <= 0 || day > 31) return <div key={i} className="p-2"></div>;
                    return (
                      <div 
                        key={i} 
                        className={`text-center p-2 text-sm cursor-pointer rounded ${
                          day === selectedDate ? 'bg-purple-500 text-white' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedDate(day)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Homework Progress */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold mb-4">Homework progress</h3>
                
                <div className="space-y-4">
                  <div className="bg-purple-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Styling with CSS</span>
                      <span className="text-sm text-gray-500">→</span>
                    </div>
                    <p className="text-sm text-gray-600">10 tasks</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">60%</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Basics of programming</div>
                      <div className="text-xs text-gray-500">10 tasks</div>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">25%</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Learn to Program in Java</div>
                      <div className="text-xs text-gray-500">20 tasks</div>
                    </div>
                    <span className="text-gray-400">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
