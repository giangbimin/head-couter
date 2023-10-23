curl -X 'POST' \
 'https://openrouter-api.dwarvesf.com/api/v1/chat/completions' \
 -H 'Authorization: Bearer
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJiaW1pbjE5OXoiLCJhcGlLZXkiOiJzay1vci12MS01MGZkOTUwMmEwMWMyMTFkZDA1ZGE5NTI5OGVhZmQ0NjhjMWFlNGM3OTdmMjg5NjFlYWIxYzBjMDU5Y2E4N2VmIn0.Q5zqJ13RSfn9WcZwNLwOZk5vYyfROu6s5uiG80FfAV4'
\
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '{ "model": "openai/gpt-3.5-turbo", "messages": [ { "role": "system",
"content": "Please act as a talent acquisition expert with knowledge of every
title. The goal is to generate a comprehensive job description. This prompt will
consist of two parts. The generated job description will adhere to a concise,
direct writing style, using simple language and descriptive action verbs in the
present tense. It will avoid abbreviations, acronyms, ambiguous terms,
gender-specific language, and references to other employees's names. It will
focus on essential activities and reflect only the current duties associated
with the role. It will also be comprehensive and thoroughly account for the most
likely and common job description content based on what's known about the job
title and answered by the user. " }, { "role": "assistant", "content": "Give me
some description for job position? data include? : job title, responsibilities,
requirements, skills, work environment, salary and benefits, company
information, contact information, interviews" }, { "role": "user", "content":
"Introduction Do you want challenge with new opportunities? You want to work in
an international environment with international colleagues; you are interested
in keeping track of latest technologies? You want to work under mentorship of
experienced colleagues, doing the best engineering practices. Just come to get a
hot seat at CMC global and shine your career. We are looking for Ruby on Rails
Software Engineer to develop our customer system. Job description • Translate
application storyboards and use cases into functional applications • Design,
build, and maintain efficient, reusable, and reliable RoR code • Ensure the best
possible performance, quality, and responsiveness of the applications • Identify
bottlenecks and bugs, and devise solutions to these problems • Help maintain
code quality, organization, and automatization • Contribute in all phases of the
development lifecycle • Write well designed, testable, efficient code • Ensure
designs are in compliance with specifications • Prepare and produce releases of
software components • Support continuous improvement by investigating
alternatives and technologies and presenting these for architectural review Job
requirement • Ruby on rails • Application Server • Application Worker •
Scheduler  • Postgres Database  • CloudAWS  + S3 buckets + Cloudfront
Distributions + Lambda + MediaConvert Tasks + Some DNS Route53 • Cloudflare •
Buildkite • Heroku Benefit • Package 14 salary months based on KPI • Extra
package upto 16M/ year • Young and dynamic working environment. • Continuous
development of hard and soft skills through work and professional trainings. •
Opportunity to approach newest technology trends • Exciting leisure: sport and
art events football club, family day... • Company's labor policy completely
pursuant to Vietnamese labor legislation plus other benefits offered by the
company (Company trip, Holiday, etc.) Contact point Attention Bui Thi Nhan Email
Btnhan@cmcglobal.vn Mobile 0396144441" } ], }'

curl -X 'POST' \
 '<https://openrouter-api.dwarvesf.com/api/v1/auth/login>' \
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -H 'Origin: <http://localhost'\> -H 'Access-Control-Request-Method: POST' \
 -d '{ "username": "bimin199z", "password": "37469285890677559506" }'

curl -X 'POST' \
 '<https://openrouter-api.dwarvesf.com/api/v1/chat/completions>' \
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -H 'Accept: text/event-stream' \
 -d '{ "model": "openai/gpt-3.5-turbo", "messages": [ {"role": "system",
"content": "You are a helpful assistant."}, {"role": "user", "content": "Explain
the Great Gatsby in 200 words."} ], "stream": true }'

curl -X 'POST' \
 '<https://openrouter-api.dwarvesf.com/api/v1/chat/completions>' \
 -H 'Authorization: Bearer
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJiaW1pbjE5OXoiLCJhcGlLZXkiOiJzay1vci12MS01MGZkOTUwMmEwMWMyMTFkZDA1ZGE5NTI5OGVhZmQ0NjhjMWFlNGM3OTdmMjg5NjFlYWIxYzBjMDU5Y2E4N2VmIn0.Q5zqJ13RSfn9WcZwNLwOZk5vYyfROu6s5uiG80FfAV4'
\
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '{ "model": "openai/gpt-3.5-turbo", "messages": [ {"role": "system",
"content": "You are a helpful assistant."}, {"role": "user", "content": "Explain
the Great Gatsby in 200 words."} ] }'

hỏi về sử dụng function với rest api ?? khác với sdk no example with function

curl -X 'POST' \
 '<https://openrouter-api.dwarvesf.com/api/v1/chat/completions>' \
 -H 'Authorization: Bearer
eyJhbGeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJiaW1pbjE5OXoiLCJhcGlLZXkiOiJzay1vci12MS01MGZkOTUwMmEwMWMyMTFkZDA1ZGE5NTI5OGVhZmQ0NjhjMWFlNGM3OTdmMjg5NjFlYWIxYzBjMDU5Y2E4N2VmIn0.Q5zqJ13RSfn9WcZwNLwOZk5vYyfROu6s5uiG80FfAV4'
\
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '{ "model": "openai/gpt-3.5-turbo", "messages": [ {"role": "system",
"content": "You are a helpful assistant."}, {"role": "user", "content": "Explain
the Great Gatsby in 200 words."} ] }'

Please act as a talent acquisition expert with knowledge of every title. The
goal is to generate a comprehensive job description. This prompt will consist of
two parts. The generated job description will adhere to a concise, direct
writing style, using simple language and descriptive action verbs in the present
tense. It will avoid abbreviations, acronyms, ambiguous terms, gender-specific
language, and references to other employees's names. It will focus on essential
activities and reflect only the current duties associated with the role. It will
also be comprehensive and thoroughly account for the most likely and common job
description content based on what's known about the job title and answered by
the user.

Please act as a model language support for software developer as the HRTech
field please help developer clear data and transfer data user input to match
with the model in database

{ "title": "String, Job Title with level and Position", "summary": "String (not
require), Job Summary depend on job title", "responsibilities": "String[], List
of responsibilities", "requirements": "String[], List of requirements or
qualifications", "skills": "String[], List of requirement skills for work
includes technical skills and soft skills", "workEnvironment": "String, work at
office, remotely, english, ect", "salary": "String, salary range of the way to
evaluate salary", "benefits": "String[], List of benefits like leave annual,
insurance, trip ect" , "interviews": "String, interview requirements and how
many steps", "company": "String, Information about the company, website, contact
...", "deadline":"String, Application deadline for apply the job", "contact":
"String, contact to person / Email address to apply or know more", "tags":
"String[], List of tags auto generate", }

please read the JD and return JSON with the column if it available, if not
available don't display column

MÔ TẢ CÔNG VIỆC Data Intelligent Analyst & Plant Coordinator (Temp 7 months)

1. Data Intelligence Analyst for Supply chain (50%)

- Accountable for accuracy data management in SAP systems with the end goal of
  increasing the efficiency and productivity.

-Ensure to create/maintain the batch flush database in SAP system accuracy,
efficiency and on time. Review, monitor and validate the integrity of data
collection to make sure the balance materials vs finish goods and
consult/provide the best solution to the management team for abnormality case

- Accountable for analyzing COE cost of Manufacturing, Warehouse, QA,
  Distribution, Engineering… to identify the opportunity and propose for
  improvement plan by using operational excellent expertise of Supply Chain.

- Accountable development & maintaining reviewed/new SOP (Standard Operational
  Procedure) regarding to data analyst to operations management for improvement.

2. Plant Coordinator (50%)

- Support for Supply chain events/ trainings or meeting. Manage agenda, travel
  plans & appointments for Plant manager.

- Other admin tasks as assigned by Line Manager

YÊU CẦU CÔNG VIỆC University/Bachelor’s degree, at least 01 year in Data
management/Reporting, especially Data in Supply Chain/Warehouse/Production is a
plus. Excellent in Microsoft Office (especially Excel), In-dept knowledge about
SAP system. Strong analytical skill and data driven mindset with problem solving
aptitude Able to multitask, prioritize and manage time efficiently
Detail-oriented Understands the operations of Supply Chain/ Warehouse /
Production. THÔNG TIN KHÁC Bằng cấp: Đại học Độ tuổi: Không giới hạn tuổi Lương:
Cạnh tranh

{ 'title': 'String, Job Title with level and Position', 'summary': 'String, Job
Summary depend on job title', 'responsibilities': 'String[], List of
responsibilities', 'requirements': 'String[], List of requirements or
qualifications', 'skills': 'String[], List of requirement skills for work
includes technical skills and soft skills', 'workEnvironment': 'String, work at
office, remotely, english, ect', 'salary': 'String, salary range of the way to
evaluate salary', 'benefits': 'String[], List of benefits like leave annual,
insurance, trip ect' , 'interviews': 'String, interview requirements and how
many steps', 'company': 'String, Information about the company, website, contact
...', 'deadline':'String, Application deadline for apply the job', 'contact':
'String, contact to person / Email address to apply or know more', 'tags':
'String[], List of tags auto generate', }

please read the JD and return JSON with the column if it available, if not
available don't display column
