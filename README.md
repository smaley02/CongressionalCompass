# SwampHacks2025 Project: Understanding Political Polarization and Congressional Voting

https://devpost.com/software/congressional-compass

## Inspiration

Political polarization has become increasingly **obvious** and **divisive** in recent years. It's more than just a difference of opinion—it's a barrier to meaningful discourse. Real understanding of politics is often not widespread. Instead of thoughtful discussion and informed arguments, many people resort to emotional appeals or blindly accept information that aligns with their personal beliefs or agendas. This results in a society where the general public is disconnected from the actual workings of their government. 

A question we often ask ourselves is: How many bills that passed Congress last year can you name? The reality is, most people don't have a solid grasp of how their representatives vote or the types of policies that are being enacted. This gap in knowledge fuels division and undermines the democratic process. We wanted to bridge this gap by providing tools that help people better understand how their representatives vote and where they stand on the political spectrum. Our project aimed to make political data more accessible, transparent, and engaging.

## What We Learned

During the course of this project, we gained valuable insights into the legislative process. We quickly realized that passing a bill is far from simple—it's a long and complex journey. Most bills introduced in Congress don't even make it out of committee. Understanding this process was eye-opening and helped us refine the way we wanted to present the data.

We also learned how to work with TypeScript to develop a website, which was a steep learning curve. While we had prior experience with other languages, TypeScript's syntax and structure were new to us. We spent considerable time getting comfortable with it, and by the end of the project, we were able to use it to develop a functional and interactive frontend.

Additionally, we gained a deeper understanding of the types of bills that make it through Congress. This allowed us to focus our analysis on key data points, such as roll-call votes, amendments, and committee memberships, which helped us visualize political trends.

## How We Built Our Project

We first used the congress.gov api to scrape as much congressional bill data that we could. We passed the bill data into deepseek-r1 to quantify how a Yea or Nay vote on the bill would correspond on the left-right/authoritarian-libertarian political compass. After scraping the voting data, we are able to build a profile of each representative.
