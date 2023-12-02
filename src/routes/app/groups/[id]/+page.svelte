<script>
    import { Textarea, Button } from 'flowbite-svelte';
    export let data
    let group = data.group
    let user = data.user
    let isUserAccepted = data.isUserAccepted
    let isAdmin = data.isAdmin
    let pendings = data.pendings


    let textareaprops = {
        id: 'message',
        name: 'content',
        label: 'Your message',
        rows: 3,
        placeholder: 'Leave a message...'
    };

    console.log(group.posts);
</script>

{#if isUserAccepted}
    <h1 class="text-5xl mb-6">{group.name} {isAdmin ? "(Admin)" : ""}</h1>
    <div class="flex gap-6">
        <div class="w-8/12 flex flex-col"> 
            <form method="post" action="?/post">
                <Textarea {...textareaprops} required />
                <div class="flex justify-end"><Button type="submit">Send</Button></div>       
            </form>

            <div class="flex flex-col gap-4">
                <h1 class="text-2xl pb-6">Posts</h1>

                {#each group.posts as post}
                    <div class="flex flex-col gap-4 p-2 bg-gray-200">
                        <div><h1 class="text-2xl">{post.author.username}:</h1></div>
                        <div><h1 class="text-lg">{post.content}</h1></div>
                    </div>
                {:else}
                    <h1 class="text-2xl text-center text-gray-500">No posts</h1>
                {/each}
            </div>
        </div>
        <div class="w-4/12 flex flex-col gap-6">
            <div class="bg-gray-200 p-4 w-full gap-4 flex flex-col">
                <h1 class="text-xl">Members</h1>
                    {#each group.members as member}
                        <h1 class="text-lg">{member.user.username}</h1>
                    {/each}
            </div>
            {#if isAdmin}
                <div class="bg-gray-200 p-4 w-full gap-4 flex flex-col">
                    <h1 class="text-xl">Pending</h1>
                        {#each pendings as p}
                            <div class="flex justify-between items-center">
                                <h1>{p.user.username}</h1>
                                <form action="?/accept" method="post"><input type="hidden" value="{p.user.id}" name="userId" /> <Button type="submit">Accept</Button></form>
                            </div>

                        {:else}
                            <h1 class="text-xl text-center text-gray-500">No pending requests</h1>
                        {/each}
                </div>  
            {/if}
        </div>
    </div>
{:else}
    <h1 class="text-7xl text-center">Pending Request</h1>
{/if}