<script>
      import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';

    export let data
    const users = data.users.users

</script>

<h1 class="text-2xl pb-8">Users</h1>

<div class="grid grid-cols-3 gap-6">
    {#each users as user}
        <Card padding="sm">
            <div class="flex flex-col items-center pb-4">
            <Avatar size="lg" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.username}</h5>
            <form class="flex mt-4 space-x-3 lg:mt-6" method="POST">
                <input type="hidden" name="id" value="{user.id}">
                <input type="hidden" name="id2" value="{data.user.id}">
                <Button type="submit">Chat</Button>
            </form>
            </div>
        </Card>
    {/each}
</div>